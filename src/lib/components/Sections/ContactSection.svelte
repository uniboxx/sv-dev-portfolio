<script lang="ts">
  import { Button, SectionHeadline } from '$components';

  let contactName = $state('');
  let contactEmail = $state('');
  let contactText = $state('');
  let isFormInvalid = $state(false);
  // $inspect(isFormInvalid);

  function onSubmit(e: Event) {
    e.preventDefault();

    // console.log(contactName, contactEmail, contactText);
    if (!contactName || !contactEmail || !contactText) {
      return (isFormInvalid = true);
    }
    fetch('/api/send-mail');
  }
</script>

<section class="mt-l">
  <SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>
  <div class="form-container default-margin mt-m">
    <form action="">
      <input
        type="text"
        class="text-input mb-m"
        class:input-error={isFormInvalid && !contactName}
        placeholder="Your Name"
        bind:value={contactName}
      />
      <input
        type="text"
        class="text-input mb-m"
        class:input-error={isFormInvalid && !contactEmail}
        placeholder="Your Email"
        bind:value={contactEmail}
      />
      <textarea
        placeholder="Tell me what's up."
        bind:value={contactText}
        class:input-error={isFormInvalid && !contactText}
      ></textarea>
      <Button onclick={onSubmit}>Submit</Button>
    </form>
    <div class="form-text">
      <h3 class="bold mb-s">Talk to me about your project</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto nemo
        fuga, aperiam quibusdam ea hic asperiores magni quod pariatur deserunt
        adipisci dicta reprehenderit maxime quo, eum, odio dolor aut soluta!
      </p>
    </div>
  </div>
  <!-- <div class="spinner-container">
    <div class="spinner"></div>
  </div> -->
</section>

<style>
  section {
    padding-bottom: 140px;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    form {
      order: 1;
      & > * {
        display: block;
        font-size: 1rem;
        font-family: inherit;
        font-weight: 500;
      }
      textarea,
      input {
        width: 100%;
        color: inherit;
        background-color: hsl(0 0% 95%);
        border-radius: 8px;
        padding: 4px 12px;
        outline: none;
        border: none;
        &::placeholder {
          font-size: 1rem;
          font-weight: 400;
        }
        @media (prefers-color-scheme: dark) {
          background-color: hsl(0 0% 15%);
        }
      }
      input {
        height: 2rem;
      }
      textarea {
        height: 8rem;
        resize: none;
        margin-bottom: 18px;
      }
      .input-error {
        background-color: hsl(0 74% 73% / 0.667);
        &::placeholder {
          color: var(--background);
        }
      }
    }
  }
  /* .spinner-container {
    display: flex;
    .spinner {
      display: inline-block;
      border: 4px solid var(--light-gray);
      border-left-color: var(--foreground);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      animation: spin 1s infinite linear;
      @media (prefers-color-scheme: dark) {
        border-color: var(--dark-gray);
        border-left-color: var(--foreground);
      }
    }
  } */
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (min-width: 40rem) {
    .form-container {
      flex-direction: row;
      justify-content: space-between;
      form {
        width: 45%;
      }
      .form-text {
        order: 1;
        width: 40%;
      }
    }
  }
  @media screen and (min-width: 80rem) {
    form {
      textarea {
        margin-bottom: 40px;
      }
    }
  }
</style>
