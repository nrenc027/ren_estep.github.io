<template>
  <section class="ResumePage" aria-label="Resume Section">
    <h1 class="ResumePage-title">I got Skillz!!!</h1>
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
      <h2>For More Infomation</h2>
      <ul class="ResumePage-extraInfo">
        <li class="ResumePage-extraItems">
          <div class="ResumePage-extraItems-link LinkHoverFocus">
            <a
              href="https://www.linkedin.com/in/rencummings/"
              target="_blank"
              class="ResumePage-extraItems-linked"
            >
              <LinkedInSVG />
            </a>
          </div>
        </li>
        <li class="ResumePage-extraItems">
          <div class="ResumePage-extraItems-link LinkHoverFocus">
            <a
              href="/RenEstep_Resume.pdf"
              target="_blank"
              download=""
              class="ResumePage-extraItems-download"
            >
              <DownloadSvg />
            </a>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Resume | Ren Estep',
    }
  },
}
</script>

<style lang="scss">
$layout-breakpoint-small: 960px;
.ResumePage {
  @media (max-width: $layout-breakpoint-small) {
    max-height: 70vh;
    max-width: 100%;
    overflow: auto;
    padding-bottom: 5rem;
  }

  max-width: 80ch;

  svg {
    fill: var(--color-primary);
  }

  &-edu,
  &-exp {
    dt {
      font-weight: 700;
    }
    dd {
      max-width: 55ch;
    }
  }
  &-extraInfo {
    list-style: none;
    display: flex;
  }
  &-extraItems {
    margin: 0.75rem;

    &-download {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 2rem;
      margin: 0;
      width: 2rem;
      svg {
        width: 1rem;
      }

      &:hover,
      &:focus {
        outline: none;
      }
    }

    &-linked {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 0;
      height: 2rem;
      width: 2rem;

      &:hover,
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
