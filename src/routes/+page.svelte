<script lang="ts">
  import { AboutMe, HeroSection } from '$components';

  const { data } = $props();

  interface Props {
    workExperience: SanityWorkExperience[];
  }
  const { workExperience }: Props = data;
</script>

<svelte:head>
  <title>My Portfolio as a Web Developer</title>
  <meta
    name="description"
    content="This is my portfolio as a web developer, mainly using Svelte."
  />
</svelte:head>

<HeroSection />
<AboutMe {workExperience} />
