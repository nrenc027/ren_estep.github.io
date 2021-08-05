<template>
  <div class="Content">
    <section aria-label="Hero Section">
      <div class="Card">
        <h1 class="Card_title">{{ intro }}</h1>
        <p class="Card_text">
          {{ snippet }}
        </p>
        <p class="Card_text">
          <strong>{{ description }}</strong>
        </p>
      </div>
    </section>
    <section class="Blog" aria-label="Blog Section">
      <h2>
        Oh! Did I mention I have a blog?
        <span class="srOnly">These will open in a new tab</span>
      </h2>
      <ul class="Blog_entries">
        <li v-for="post in blogPosts" :key="post.id">
          <PostCard
            :title="post.title"
            :url="post.url"
            :description="post.description"
            :tags="post.tag_list"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: 'I am a creator of things...',
      snippet: ` I was once told that you should be able to tell someone concisely what
        you do in the time it takes you to ride in an elevator. These are some of the things I'm about:`,
      description: `Accessibility, Web Development, Drawing, Art, & Cardio.`,
      blogPosts: [],
    }
  },
  async fetch() {
    this.blogPosts = await fetch(
      `https://dev.to/api/articles?username=stories_of_ren`
    ).then((res) => res.json())
  },
  head() {
    return {
      title: `Creator of Things | Ren Estep`,
    }
  },
}
</script>

<style lang="scss">
$layout-breakpoint-small: 960px;
.LinkHoverFocus {
  border: 1px dotted transparent;
  height: 2em;
  margin: 1em;
  transition: transform 200ms;
  width: 2em;

  a {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: center;
    width: inherit;
  }
  svg {
    fill: var(--color-primary);
  }

  &:hover,
  &:focus-within {
    border: 1px dotted #b200fd;
    border-radius: 50%;
    transform: scale(1.5);
  }
}

.srOnly {
  height: 0;
  width: 0;
  font-size: 0;
}
.Content {
  @media (max-width: $layout-breakpoint-small) {
    border-left: 0;
    border-top: 2px solid var(--color-primary);
    max-height: 70vh;
    overflow: auto;
    width: 100%;
  }

  width: 80ch;
}
.Card {
  @media (max-width: $layout-breakpoint-small) {
    padding: 0;
  }

  margin-top: 1%;
  padding: 1.5rem 1.5rem 0 1.5rem;
  width: 90%;

  &_title {
    font-size: 2rem;
  }

  &_text {
    font-size: 1.25rem;
    max-width: 80ch;
  }
}
.Blog {
  @media (max-width: $layout-breakpoint-small) {
    padding: 0;
  }

  padding: 1.5rem;

  &_entries {
    @media (max-width: $layout-breakpoint-small) {
      max-height: 100%;
      padding-left: 0;
    }

    display: flex;
    flex-direction: column;
    list-style: none;
    height: 50vh;
    overflow: auto;
    padding: 0;
    padding-left: 0.5rem;
  }
}
</style>
