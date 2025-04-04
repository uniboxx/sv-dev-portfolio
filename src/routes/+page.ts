import sanityClient from '$utils/sanity';

export async function load() {
  const workExperience: SanityWorkExperience[] = await sanityClient.fetch(
    `*[_type == "devExperience"] | order(startDate desc)`
  );

  const rawProjects: SanityProject[] = await sanityClient.fetch(
    `*[_type == "project"] | order(startDate desc)`
  );
  console.log(rawProjects);

  // const projects = rawProjects.map(processProjectEntries);

  return { workExperience, rawProjects };
}
