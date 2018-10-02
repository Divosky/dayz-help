<template>
  <div class="about">
    <h1>Items</h1>
    <Item />
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  name: 'items',
  components: {
    Item,
  },
};
</script>
