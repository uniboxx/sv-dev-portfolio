<script lang="ts">
  import { workExperienceArray } from '$utils/data';

  interface WorkExperience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate?: string;
  }

  const workExperience: WorkExperience[] = workExperienceArray;
</script>

<section class="default-margin work-experience mt-m">
  <h2 class="headline">Past work Experience</h2>
  <ul class="work-experience-list">
    {#each workExperience as job}
      <li class="work-item">
        <article>
          <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
          <div class="company-and-date">
            <p>{job.company}</p>
            <p class="startDate">
              {job.startDate}
              {#if job.endDate}
                / {job.endDate}
              {:else}
                / present
              {/if}
            </p>
          </div>
        </article>
      </li>
    {/each}
  </ul>
</section>

<style>
  .work-experience {
    .work-item {
      p {
        margin-bottom: 0;
        &:last-of-type {
          margin-bottom: 10px;
        }
      }
      border-bottom: 1px solid var(--dark-gray);
      &:not(:first-of-type) {
        padding-top: 16px;
      }
      @media (prefers-color-scheme: dark) {
        border-bottom: 1px solid var(--light-gray);
      }
    }
    .headline {
      margin: 32px 0;
    }
    .startDate {
      color: var(--dark-gray);
      @media (prefers-color-scheme: dark) {
        color: var(--light-gray);
      }
    }
  }
  @media screen and (min-width: 40rem) {
    .work-experience {
      display: flex;
      justify-content: space-between;

      .work-experience-list {
        width: 50%;
      }

      .headline {
        max-width: 10ch;
        margin: unset;
        order: 2;
        text-align: right;
      }
    }
  }
  @media screen and (min-width: 80rem) {
    .work-experience {
      .company-and-date {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
