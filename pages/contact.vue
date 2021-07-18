<template>
  <section class="ResumePage" aria-label="Resume Section">
    <h1 class="ResumePage-title">Hit me up, I'm Online!</h1>
    <article class="ResumePage-edu">
      <h2>Education</h2>
      <dl>
        <dt>2011 - MFA - The University of Tenessee</dt>
        <dd>
          Area of Study - 4D Media <br />
          Accomplishments - Teaching Associateship.
        </dd>
        <dt>2008 - BFA - Wright State University</dt>
        <dd>
          Area of Study - Photography <br />
          Accomplishments - Yeck Fellowship via Dayton Art Istitute.
        </dd>
      </dl>
    </article>
    <article class="ResumePage-exp">
      <h2>Where I'm Working</h2>
      <dl>
        <dt>2017 till Present - Mile Two, LLC</dt>
        <dd>
          <strong>Software Engineer</strong> <br />
          Projects involving ReactJS frontend development with additional use of
          NextJS, Python backend frameworks such as flask, NodeJS backend
          frameworks such as Express.<br />
          Agile prototype development via government contracts in respects to
          {{ `R&D` }} work.
        </dd>
      </dl>
    </article>
    <article class="ResumePage-exp">
      <h2>For More Infomation</h2>
      <ul>
        <li>linkedin</li>
        <li>Download my actual resume</li>
      </ul>
    </article>
  </section>
</template>

<style lang="scss">
$layout-breakpoint-small: 960px;

blockquote {
  font-weight: 500;
}
.ResumePage {
  @media (max-width: $layout-breakpoint-small) {
    max-height: 70vh;
    max-width: 100%;
    overflow: auto;
  }

  max-width: 80ch;

  &-edu,
  &-exp {
    dt {
      font-weight: 700;
    }
    dd {
      max-width: 55ch;
    }
  }
}
</style>