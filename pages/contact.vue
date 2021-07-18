<template>
  <section class="ContactPage" aria-label="Resume Section">
    <h1 class="ContactPage-title">Hit me up, I'm Online!</h1>
    <article>
      <h2 class="ContactPage-email">
        <a href="mailto:n.ren.estep@gmail.com">n.ren.estep at gmail</a>
      </h2>
    </article>
    <article class="ContactPage-social">
      <h2 class="ContactPage-social-title">Oh look Im social!</h2>
      <ul class="ContactPage-social-list">
        <li>git</li>
        <li>dev</li>
        <li>pen</li>
        <li>tweet</li>
      </ul>
    </article>
  </section>
</template>

<style lang="scss">
$layout-breakpoint-small: 960px;

.ContactPage {
  @media (max-width: $layout-breakpoint-small) {
    max-height: 70vh;
    max-width: 100%;
    overflow: auto;
  }

  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 80ch;

  &-title {
    align-self: flex-start;
    text-align: left;
  }

  &-email {
    text-align: center;
    font-size: 3rem;
    a {
      color: var(--color-primary);
      text-decoration: 0;
    }
  }
  &-social {
    &-title {
      font-size: 1.25rem;
    }
    &-list {
      display: flex;
      list-style: none;
      padding: 0;
      li {
        margin: 1em;
        padding: 2em;
      }
    }
  }
}
</style>