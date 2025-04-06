<script lang="ts">
  import { Button } from '$components';
  import { onclick } from '$utils/functions';
</script>

<nav class="navbar default-margin">
  <a href="/" class="logo">UNIBOX</a>
  <div class="navbar-links">
    <a href="/#about-me" class="nav-link">About Me</a>
    <a href="/#my-work" class="nav-link">Work</a>
    <Button className="nav-bar" {onclick}>Contact</Button>
  </div>
</nav>

<style>
  .navbar {
    margin-top: 32px;
    margin-bottom: 32px;

    .logo {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .navbar-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    gap: 32px;
    margin-top: 16px;
    .nav-link:hover {
      text-decoration: underline;
    }
  }
  @media screen and (min-width: 40rem) {
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
    .navbar-links {
      margin-top: unset;
      gap: 60px;
    }
  }
</style>
