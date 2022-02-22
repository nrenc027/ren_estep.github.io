<template>
  <section class="ResumePage" aria-label="Resume Section">
    <h1 class="ResumePage-title">I got Skillz!!!</h1>
    <article class="ResumePage-exp">
      <ul class="ResumePage-extraInfo">
        <li class="ResumePage-extraItems">
          Check me out on LinkedIn
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
          Download my resume
          <div class="ResumePage-extraItems-link LinkHoverFocus">
            <a
              href="/Ren-Estep-Resume-22.pdf"
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
    <div class="ResumePage-scrollContainer" tabindex="0">
      <article class="ResumePage-exp">
        <h2>I've Got Experience</h2>
        <JobDeets :experiences="experiences" />
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          business: 'Mile Two, LLC',
          positions: [
            {
              title: '09/2021 till Present - Sr Software Engineer',
              deets: [
                `Mentors associate and mid-level engineers on problem solving, development blockers, and accessibility best practices.`,
                `Researches and makes decisions in regards to tools and modules used within the technical stack of projects.`,
                `Leads and participates in technical discussions with customers and team`,
                'Collaborated on and developed many projects utilizing ReactJS, Next.js, NodeJs, Python, Postgres and MongoDB',
                `Agile prototype development via government contracts in respects to ${`R&D`} work.`,
              ],
            },
            {
              title: '2017 till 09/2021 - Software Engineer',
              deets: [
                'Collaborated on and developed many projects utilizing ReactJS, Next.js, NodeJs, Python, Postgres and MongoDB',
                `Introduced improvements to accessibility compliance through integrating axe-core wrapper on projects and eslint accessibility plugins to catch code that produces inaccessible applications`,
                `Mentored associate level and intern employees through pairing sessions and public presentations on accessibility and CSS skills`,
                `Agile prototype development via government contracts in respects to ${`R&D`} work.`,
              ],
            },
          ],
        },
        {
          business: 'MRS Electronic',
          positions: [
            {
              title: '04/2017 - 11/2017 : Developer/Designer',
              deets: [
                'Design and produce iconography for mobile and desktop applications.',
                `Developed multiple projects using JavaScript, AngularJS, CSS, Swift, and C#`,
              ],
            },
            {
              title: `04/2016 - 04/2017 : Manager of Marketing & Creative Services`,
              deets: [
                'Maintain website content',
                `Design, produce, and schedule content for social media`,
                `Design UI Wireframes`,
              ],
            },
          ],
        },
      ],
    }
  },
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

  &-scrollContainer {
    border: 2px dotted transparent;
    max-height: 76vh;
    overflow: scroll;
    padding: 1em;

    &:focus {
      outline: none;
      border: 2px dotted var(--color-primary);
      border-radius: 6px;
    }
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
    justify-content: space-evenly;
  }

  &-extraItems {
    align-items: center;
    display: flex;
    flex-direction: column;
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
