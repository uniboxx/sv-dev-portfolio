<script lang="ts">
  import {
    AboutMe,
    ContactSection,
    HeroSection,
    MyWorkSection,
    SkillsSection,
  } from '$components';

  const { data } = $props();
  // console.log(data);

  const { workExperience, projects, skills } = data;
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
<MyWorkSection {projects} />
<SkillsSection {skills} />
<ContactSection />
