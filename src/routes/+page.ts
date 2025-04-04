import sanityClient, { processProjectEntries } from '$utils/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(startDate desc)`
  );

  const rawDatas: SanityProject[] = await sanityClient.fetch(
    `*[_type == "project"] | order(dateAccomplished desc)`
  );
  // console.log(rawDatas);
  // console.log(rawDatas[0].content);

  const projects = rawDatas.map(processProjectEntries);

  // console.log(rawDatas[0].image);
  // console.log(projects[0].projectImageUrl);
  // console.log(projects[0].content);

  const skills: Skill[] = await sanityClient.fetch(
    `*[_type == "skills"][0].skillsList`
  );

  return { workExperience, projects, skills };
};
