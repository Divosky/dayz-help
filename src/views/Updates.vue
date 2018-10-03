<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Updates</h3>
      <Update :updates="updates"/>
    </section>
  </main>
</template>

<script>
import Update from '@/components/Update.vue';

// Random content to have something to show
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default {
  name: 'changelog',
  data() {
    return {
      updates: [],
    };
  },
  created() {
    const url = `${API_URL}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.updates = data;
      });
  },
  components: {
    Update,
  },
};
</script>

<style lang="scss" scoped>
</style>
