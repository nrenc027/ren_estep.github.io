<template>
  <article class="PostCard">
    <h3 class="PostCard_title">
      <a class="PostCard_title-link" target="blank" :href="url">{{ title }}</a>
    </h3>
    <ul class="PostCard_tags">
      <li v-for="tag in tags" :key="tag">#{{ tag }}</li>
    </ul>
    <p>{{ description }}</p>
  </article>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    url: { type: String, default: '' },
    tags: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss">
$layout-breakpoint-small: 960px;

.PostCard {
  @media (max-width: $layout-breakpoint-small) {
    width: 90%;
  }

  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.65);
  margin: 1rem 0;
  padding: 0.25rem 1rem 0.5rem 1rem;
  width: 85%;

  &_title {
    margin-bottom: 10px;

    &-link {
      color: var(--color-primary);
      text-decoration: none;
      border: 2px dotted transparent;
      padding: 0.15rem 0.25rem;

      &:hover,
      &:focus {
        outline: 0;
        border: 2px dotted var(--color-primary);
        border-radius: 6px;
      }
    }
  }

  &_tags {
    display: flex;
    padding: 0;

    li {
      border: 1px solid var(--color-primary);
      border-radius: 20px;
      list-style: none;
      margin: 0 0.25rem;
      padding: 5px;
    }
  }
}
</style>
