<script lang="ts">
  import { SectionHeadline } from '$components';

  interface Props {
    projects: ProcessedEntry[];
  }
  const { projects }: Props = $props();
  // console.log(projects);
  const mainProject: ProcessedEntry = projects[0];
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project mb-m">
      <a href={`/work/${mainProject.slug}`}>
        <img src={mainProject.entryImageUrl} alt={mainProject.name} />
      </a>
      <div class="project-info mt-s">
        <div class="title-and-company">
          <h3 class="semi-bold">{mainProject.name}</h3>
          <p class="company">{mainProject.company}</p>
        </div>
        <a href={`/work/${mainProject.slug}`} class="btn-to-article">
          &rarr;
        </a>
      </div>
    </article>
    <div class="more-projects-container">
      {#each projects.slice(1) as project}
        <article class="project">
          <a href={`/work/${project.slug}`}>
            <img src={project.entryImageUrl} alt={project.name} />
          </a>
          <div class="project-info mt-s">
            <div class="title-and-company">
              <h3 class="semi-bold">{project.name}</h3>
              <p class="company">{project.company}</p>
            </div>
            <a href={`/work/${project.slug}`} class="btn-to-article">
              &rarr;
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  img {
    width: 100%;
    height: auto;
  }
  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: start;
  }
  .company {
    color: var(--dark-gray);
    @media (prefers-color-scheme: dark) {
      color: var(--light-gray);
    }
  }
  .btn-to-article {
    border: 1px solid var(--dark-gray);
    border-radius: 10px;
    padding: 0 10px;
    @media (prefers-color-scheme: dark) {
      border-color: var(--light-gray);
    }
  }

  @media screen and (min-width: 40rem) {
    .more-projects-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
    }
  }
</style>
