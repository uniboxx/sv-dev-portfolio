<script lang="ts">
  const { data } = $props();
  // $inspect(data);

  let { project }: { project: ProcessedProject } = data;

  const { company, name, dateAccomplished, stack, projectImageUrl, content } =
    project;

  function getTagFromStyle(style: ProcessedTextContent['style']): string {
    if (style === 'normal') return 'p';
    return style;
  }
</script>

<main class="default-margin work-page">
  <h4>{company}</h4>
  <div class="underscore"></div>
  <h2>{name}</h2>
  <img src={projectImageUrl} alt="" class="project-image" />
  <div class="project-container mt-m">
    <div class="meta-data">
      <h3 class="semi-bol">Date</h3>
      <p>{dateAccomplished.slice(0, 7)}</p>
      <h3 class="stack semi-bold mt-m">Tech Stack</h3>
      <ul>
        {#each stack as tech}
          <li>{tech}</li>
        {/each}
      </ul>
    </div>
    <div class="project-text">
      {#each content as block}
        {#if block.type === 'text'}
          <svelte:element this={getTagFromStyle(block.style)}
            >{block.textToRender}</svelte:element
          >
        {:else if block.type === 'image'}
          <img class="content-image" src={block.url} alt="" />
        {/if}
      {/each}
    </div>
  </div>
</main>

<style>
  h1:not(:first-of-type),
  h2,
  img,
  .project-text {
    margin-top: 16px;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media screen and (min-width: 40rem) {
    h2,
    img {
      margin-top: 24px;
    }

    img {
      max-height: 450px;
    }

    .project-container {
      display: flex;
    }
    .stack {
      min-width: 10rem;
    }

    .project-text {
      margin-top: unset;
    }
  }
</style>
