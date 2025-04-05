<footer class="footer">
  <div class="footer-container">
    <h3 class="semi-bold mb-xs">Unibox</h3>
    <div class="mb-l">
      <a href="https://github.com/uniboxx" target="_blank" class="footer-link"
        >Github</a
      >
    </div>
    <p>&copy; {new Date().getFullYear()} Unibox. All rights reserved</p>
  </div>
</footer>

<style>
  .footer {
    background-color: var(--foreground);
    color: var(--background);
    padding: 32px 0;
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-link {
    color: var(--light-gray);
    text-decoration: none;
    @media (prefers-color-scheme: dark) {
      color: var(--dark-gray);
    }
  }
  @media screen and (min-width: 40rem) {
    .footer {
      background-color: var(--foreground);
      color: var(--background);
      padding: 40px 20px;
    }
    .footer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-link {
      color: var(--light-gray);
      text-decoration: none;
    }
  }
</style>
