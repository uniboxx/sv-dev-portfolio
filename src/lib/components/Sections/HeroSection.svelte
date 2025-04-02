<script lang="ts">
  import { Button } from '$components';
  import { onclick } from '$utils/functions';
</script>

<section class="hero-section default-margin">
  <h3>Hello I'm Davide</h3>
  <div class="underscore mb-m"></div>
  <h1>
    I'm a Svelte developer crafting intuitive and performant <br /><span
      class="mb-m">web experiences</span
    >
  </h1>
  <Button {onclick}>Let's talk</Button>
</section>

<style>
  .hero-section {
    padding-top: 30px;
    @media screen and (min-width: 80rem) {
      padding-top: 60px;
    }
  }
  h1 span {
    color: var(--dark-gray);
    display: inline-block;
    @media (prefers-color-scheme: dark) {
      color: var(--light-gray);
    }
  }
</style>
