<template>
  <section class="projects">
    <h2>{{content}}</h2>
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      content: 'Мои разработки'
    }
  }
}
</script>

<style>
.projects {
  background-color: rgba(242, 199, 48, 1);
}
</style>
