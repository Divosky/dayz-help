<template>
  <div class="items">
    <div class="items__item" v-for="item in specifiedItem" :key="item.id">
    <h3 class="items__item__title">{{ item.name }}</h3>
    <a class="items__item__preview" href="#" target="_blank"><img class="items__item__preview__image" src="http://placehold.it/250x250" alt="Bloodbag"></a>
    <dl class="items__item__description">
      <dt class="items__item__description__title">Location:</dt>
      <dd class="items__item__description__value">{{ item.company.name }}</dd>

      <dt class="items__item__description__title">Combines with:</dt>
      <dd class="items__item__description__value">{{ item.company.catchPhrase }}</dd>

      <dt class="items__item__description__title">Description:</dt>
      <dd class="items__item__description__value">{{ item.company.bs }}</dd>
    </dl>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: ['items', 'searchTerm'],
  computed: {
    specifiedItem() {
      return this.items.filter(item => item.name.match(this.searchTerm));
    },
  },
};
</script>

<style scoped lang="scss">
.items__item {
  display: inline-block;
  margin: 1rem;

  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 1.3rem;
  }

  &__preview {
    display: block;
    text-align: center;

    &__image {
      max-width: 100%;
      border-radius: var(--border-radius);
    }
  }

  &__description {
    margin: var(--base-margin) auto;

    &__title,
    &__value {
      display: inline;
      margin: .3rem 0;
      line-height: 130%;
    }

    &__title {
      font-weight: 700
    }

    &__value {
      word-break: break-all;
      &:before {
        content: " "
      }

      &:after {
        content: "\A";
        white-space: pre
      }
    }
  }
}

@supports (display: grid) {
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: var(--base-margin);

    &__item {
      margin: 0;
      width: fit-content;
    }
  }
}


@media (min-width: 700px) {
  .items__item__description {
    width: 90%;
  }
}
</style>
