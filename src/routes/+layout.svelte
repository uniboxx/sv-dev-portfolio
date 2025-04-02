<script lang="ts">
  const { children } = $props();
</script>

<div class="container">
  <header></header>
    {@render children()}
  <footer></footer>
</div>

<style>
  :global {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wdth,wght@0,75..100,100..900;1,75..100,100..900&display=swap');

    :root {
      --background: #fefefe;
      --foreground: #212121;

      @media (prefers-color-scheme: dark) {
        --background: #212121;
        --foreground: #fefefe;
      }
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      width: 100%;
      height: 100%;
    }

    body {
      font-family: Roboto, sans-serif;
      background: var(--background);
      color: var(--foreground);
    }
  }

  .container {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    justify-items: center;
    align-items: center;
  }
</style>
