import { createClient, type ClientConfig } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
  projectId: 'm65oxp0l',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-04-03',
};

const sanityClient = createClient(config);

export default sanityClient;

export function processProjectEntries(rawData: SanityProject) {
  //- extract url from image object
  const builder = ImageUrlBuilder(sanityClient);
  const projectImageUrl = builder.image(rawData.image).url();

  const processedEntry: ProcessedProject = {
    name: rawData.name,
    company: rawData.company,
    dateAccomplished: rawData.dateAccomplished,
    stack: rawData.stack,
    slug: rawData.slug,
    projectImageUrl,
    content: rawData.content.map(processEntryContent),
  };
  return processedEntry;
}

function processEntryContent(content: RawTextContent | RawImageContent) {
  if (content._type === 'block') {
    //- process text content
    const processedTextContent: ProcessedTextContent = {
      type: 'text',
      style: content.style,
      textToRender: content.children.map((elem) => elem.text).join('\n'),
    };
    return processedTextContent;
  } else {
    //- process image content
    const builder = ImageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(content).url();

    const processedImage: ProcessedImageContent = {
      type: 'image',
      url: projectImageUrl,
    };

    return processedImage;
  }
}
