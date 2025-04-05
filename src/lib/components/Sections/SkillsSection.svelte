<script lang="ts">
  import { SectionHeadline } from '$components';

  interface Props {
    skills: Skill[];
  }

  const { skills }: Props = $props();
  // $inspect(skills);
</script>

<section class="mt-l">
  <SectionHeadline sectionName="skills">Skills</SectionHeadline>
  <div class="wrapper default-margin">
    <div class="skills-container">
      {#each skills as skill}
        <i class={skill.iconClass}></i>
      {/each}
    </div>
  </div>
</section>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
  }
  .skills-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px 10px;
  }
  i {
    font-size: 3rem;
    color: var(--foreground);
  }
  @media screen and (min-width: 40rem) {
    i {
      font-size: 4rem;
    }
  }
</style>
