<template>
  <div class="App_Content">
    <header class="Header">
      <div class="Header_title">
        <button class="SkipNav" @click="skipToContent">Skip to content</button>
        <nuxt-link class="Header_title-link" to="/">
          <div>
            <span class="Header_title-first">REN</span>
            <span class="Header_title-last">ESTEP</span>
          </div>
        </nuxt-link>
        <nav class="Header_nav">
          <nuxt-link class="Header_nav-anchor" to="about"
            ><div class="Header_nav-link"><AboutSvg /></div
          ></nuxt-link>
          <nuxt-link class="Header_nav-anchor" to="resume"
            ><div class="Header_nav-link"><ResumeSvg /></div
          ></nuxt-link>
          <nuxt-link class="Header_nav-anchor" to="contact"
            ><div class="Header_nav-link"><ContactSvg /></div
          ></nuxt-link>
        </nav>
      </div>
    </header>
    <main id="skipTo" class="Main" tabindex="0">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    skipToContent() {
      document.getElementById('skipTo').focus()
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
$layout-breakpoint-small: 960px;
html {
  --color-primary: #b200fd;

  font-family: 'Montserrat', sans-serif;
}

.App_Content {
  display: grid;
  grid: 1fr / auto 1fr;
  width: 100%;
  height: 98vh;
  overflow: hidden;
  @media (max-width: $layout-breakpoint-small) {
    grid: 0.5fr / 1fr;
  }
}
.Header {
  &_title {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-link {
      color: var(--color-primary);
      text-decoration: none;
      border: 2px solid transparent;
      border-radius: 6px;
      &:focus {
        outline: none;
        border: 2px dotted var(--color-primary);
        border-radius: 6px;
      }
    }

    div {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    &-first {
      font-size: 5rem;
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      margin-bottom: -1.35rem;
    }
    &-last {
      font-size: 3rem;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 5px;
    }
  }
  &_nav {
    margin-top: 0.5rem;
    display: flex;
    &-anchor {
      margin: 0.75rem;
      transition: transform 200ms;
      &:hover,
      &:focus {
        outline: none;
        border: 1px dotted #b200fd;
        border-radius: 50%;
        transform: rotate(15deg) scale(1.5);
      }
    }

    &-link {
      padding: 0.5rem;
      svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
.Main {
  @media (max-width: $layout-breakpoint-small) {
    border-left: 0;
    border-top: 2px solid var(--color-primary);
  }

  align-items: center;
  display: flex;
  flex-direction: column;
  border: 2px dotted transparent;
  border-left: 2px solid var(--color-primary);

  &:focus {
    outline: none;
    border: 2px dotted var(--color-primary);
    border-radius: 6px;
  }
}
.SkipNav {
  opacity: 0;

  &:focus {
    background: 0;
    border: 0;
    border-bottom: 2px dotted var(--color-primary);
    color: var(--color-primary);
    font-size: 1.5rem;
    opacity: 1;
    outline: 0;
  }
}
</style>