<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Items</h3>
      <input v-model="searchTerm" type="text" class="input" placeholder="Search for an item">
    </section>
    <section class="items">
      <Loader v-if="loader" />
      <Item :items="items" :searchTerm="searchTerm" />
    </section>
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue';
import Item from '@/components/Item.vue';

// Random content to have something to show
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default {
  name: 'items',
  data() {
    return {
      searchTerm: '',
      items: [],
      loader: true,
    };
  },
  created() {
    const url = `${API_URL}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.loader = false;
        this.items = data;
      });
  },
  components: {
    Item,
    Loader,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_extends.scss';

.page__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.items {
  @extend %content-container;
}
</style>
