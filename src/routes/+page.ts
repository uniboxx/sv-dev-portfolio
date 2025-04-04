import sanityClient, { processEntries } from '$utils/sanity';

export async function load() {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(startDate desc)`
  );

  const rawDatas: SanityDocument[] = await sanityClient.fetch(
    `*[_type == "project"] | order(dateAccomplished desc)`
  );
  // console.log(rawDatas);
  // console.log(rawDatas[0].content);

  const projects = rawDatas.map(processEntries);

  // console.log(rawDatas[0].image);
  // console.log(projects[0].entryImageUrl);
  // console.log(projects[0].content);

  return { workExperience, projects };
}
