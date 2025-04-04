<script lang="ts">
  import { SectionHeadline } from '$components';

  interface Props {
    projects: ProcessedProject[];
  }
  const { projects }: Props = $props();
  // console.log(projects);
  const mainProject: ProcessedProject = projects[0];
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project">
      <a href={`/work/${mainProject.slug}`}>
        <img src={mainProject.projectImageUrl} alt={mainProject.name} />
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
            <img src={project.projectImageUrl} alt={project.name} />
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
  .main-project {
    margin-bottom: 32px;
  }
  img {
    width: 100%;
    max-height: 450px;
    object-fit: cover;
    border-radius: 20px;
  }
  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .company {
    margin-bottom: 0;
    color: var(--dark-gray);
    @media (prefers-color-scheme: dark) {
      color: var(--light-gray);
    }
  }
  .btn-to-article {
    border: 1px solid var(--dark-gray);
    border-radius: 40px;
    display: block;
    font-size: 1.4rem;
    padding: 0 18px;
    @media (prefers-color-scheme: dark) {
      border-color: var(--light-gray);
    }
  }

  .more-projects-container {
    .project {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 40rem) {
    .btn-to-article {
      font-size: 2rem;
      padding: 0 24px;
    }
    .more-projects-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      img {
        height: 350px;
      }
      .project {
        margin-bottom: unset;
      }
    }
  }
</style>
