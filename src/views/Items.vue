<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Items</h3>
      <input v-model="searchTerm" type="text" class="input" placeholder="Search for an item">
    </section>
    <section class="items">
      <Item :items="items" :searchTerm="searchTerm" />
    </section>
  </main>
</template>

<script>
import Item from '@/components/Item.vue';

// Random content to have something to show
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default {
  name: 'items',
  data() {
    return {
      searchTerm: '',
      items: [],
    };
  },
  created() {
    const url = `${API_URL}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.items = data;
      });
  },
  components: {
    Item,
  },
};
</script>

<style lang="scss" scoped>
  .page__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
