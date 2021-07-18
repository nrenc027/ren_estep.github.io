<template>
  <section class="AboutPage" aria-label="About Section">
    <div class="Card">
      <h1 class="AboutPage-title">Let's Talk About Me!</h1>
      <article>
        <blockquote>
          Now this is a story all about how <br />
          My life got flipped turned upside down <br />
          And I'd like to take a minute, just sit right there <br />
          I'll tell you how I became a Software Engineer...
        </blockquote>
        <p class="AboutPage-quoteAuth">
          With inspiration from{{
            ` DJ Jazzy Jeff & The Fresh Prince(Will Smith)`
          }}, let me tell you all about me!
        </p>
        <p class="AboutPage__card-text">
          I am a software engineer that hails from Dayton, OH. I work at a
          totally baller startup called Mile Two. I've received a masters and
          bachelors in Fine Arts focusing on photography and 4D media. I have a
          passion for learning and teaching about accessibility. In my free time
          I enjoy running, drawing, and watching Asian dramas and anime.
        </p>
        <p><strong>Quarky facts</strong></p>
        <ul>
          <li>
            I have a tattoo of a velociraptor on my right shoulded that denotes
            my love for the movie Jurassic Park. It says, "Clever Girl'
          </li>
          <li>I organize a running club of about 3 - 5 people</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style lang="scss">
$layout-breakpoint-small: 960px;

blockquote {
  font-weight: 500;
}
.AboutPage {
  @media (max-width: $layout-breakpoint-small) {
    max-width: 100%;
  }

  max-width: 80ch;

  &-quoteAuth {
    font-weight: 700;
    max-width: 75ch;
  }
}
</style>