<template>
  <section class="ContactPage" aria-label="Resume Section">
    <h1 class="ContactPage-title">Hit me up, I'm Online!</h1>
    <article>
      <h2 class="ContactPage-email">
        <a href="mailto:n.ren.estep@gmail.com">n.ren.estep at gmail</a>
      </h2>
    </article>
    <article class="ContactPage-social">
      <h2 class="ContactPage-social-title">Oh look I'm social!</h2>
      <ul class="ContactPage-social-list">
        <li class="LinkHoverFocus">
          <a href="https://github.com/storiesOfRen" target="_blank">
            <GitHubSvg />
          </a>
        </li>
        <li class="LinkHoverFocus">
          <a href="https://dev.to/stories_of_ren" target="_blank">
            <DevSvg
          /></a>
        </li>
        <li class="LinkHoverFocus">
          <a href="https://codepen.io/ren_estep" target="_blank">
            <CodePenSvg
          /></a>
        </li>
        <li class="LinkHoverFocus">
          <a href="https://twitter.com/stories_of_ren" target="_blank">
            <TwitterSvg
          /></a>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Hit Me Up | Ren Estep',
    }
  },
}
</script>

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
    transition: transform 200ms;
    a {
      color: var(--color-primary);
      text-decoration: 0;
    }
    &:hover,
    &:focus-within {
      border-bottom: 1px dotted #b200fd;
      outline: none;
      transform: scale(1.25);
    }
  }
  &-social {
    width: 100%;
    &-title {
      font-size: 1.25rem;
    }
    &-list {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      padding: 0;
      width: 100%;
    }
  }
}
</style>
