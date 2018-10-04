<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Updates</h3>
      <Loader v-if="loader" />
      <Update :updates="updates"/>
    </section>
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Update from '@/components/Update.vue';

// Random content to have something to show
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default {
  name: 'changelog',
  data() {
    return {
      updates: [],
      loader: true,
    };
  },
  created() {
    const url = `${API_URL}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.loader = false;
        this.updates = data;
      });
  },
  components: {
    Update,
    Loader,
  },
};
</script>

<style lang="scss" scoped>
</style>
