import sanityClient, { processProjectEntries } from '$utils/sanity';

export async function load() {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(startDate desc)`
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    `*[_type == "project"] | order(startDate desc)`
  );
  // console.log(rawProjects);
  // console.log(rawProjects[0].content);

  const projects = rawProjects.map(processProjectEntries);

  // console.log(rawProjects[0].image);
  // console.log(projects[0].projectImageUrl);
  // console.log(projects[0].content);

  return { workExperience, projects };
}
