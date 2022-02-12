<template>
  <span>
    <article v-for="experience in experiences" :key="experience">
      <h3>{{ experience.business }}</h3>
      <dl v-for="position in experience.positions" :key="position">
        <dt>{{ position.title }}</dt>
        <dd>
          <li v-for="deet in position.deets" :key="deet">{{ deet }}</li>
        </dd>
      </dl>
    </article>
  </span>
</template>
<script>
export default {
  props: {
    experiences: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
