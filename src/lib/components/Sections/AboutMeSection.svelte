<script lang="ts">
  import { Button, ExperienceTable, SectionHeadline } from '$components';
  import image from '$assets/about-me.jpg?enhanced';
  import { onclick } from '$utils/functions';
</script>

<section class="about-me mt-l">
  <SectionHeadline sectionName="about-me">About Me</SectionHeadline>
  <div class="mt-m content-container default-margin">
    <enhanced:img class="image" src={image} alt="about-me" />
    <div class="text">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
        explicabo iure. Iure rem quidem vel laboriosam ut blanditiis accusamus
        cupiditate inventore repudiandae veniam, natus magni, eaque aperiam
        mollitia dolorem excepturi?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste
        repudiandae dignissimos iure enim delectus optio numquam in itaque
        quidem magnam totam quisquam voluptas quis similique vero veniam, labore
        obcaecati?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        tenetur maiores aperiam quae quisquam, iusto omnis incidunt delectus.
        Qui provident voluptatum laudantium, maiores quaerat saepe amet porro
        vero. Quasi, tempora.
      </p>
      <Button className="mt-m" {onclick}>Tell me about your project</Button>
    </div>
  </div>
  <ExperienceTable />
</section>

<style>
  .image {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
    filter: grayscale(1);
    border-radius: 10px;
  }

  @media screen and (min-width: 40rem) {
    .content-container {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      gap: 32px;
    }
    picture {
      width: 45%;
      .image {
        border-radius: 20px;
        margin-bottom: unset;
      }
    }
    .text {
      width: 55%;
      text-align: left;
    }
  }
</style>
