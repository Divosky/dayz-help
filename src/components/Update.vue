<template>
  <div class="updates">
    <article class="updates__update" v-for="update in updates" :key="update.id">
      <header class="updates__update__header">
        <h3 class="updates__update__title">{{ update.title }}</h3>
      </header>
      <section class="updates__update__article">
        <p>{{ update.body }}</p>
      </section>
      <footer class="updates__update__footer">
        <!-- Let's make a random author since it's just mockup -->
        <p>
          <strong>Brought by:</strong>
          {{authors[Math.floor(Math.random() * authors.length)]}}
        </p>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Update',
  data() {
    return {
      authors: ['Ino42O', 'Pottus', 'Slice'],
    };
  },
  props: ['updates'],
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/_extends.scss';

.updates {
  &__update {
    @extend %content-container;
    margin-bottom: var(--base-margin);

    &__header {
      margin-bottom: var(--base-margin);
    }

    &__title {
      margin: 0;
      font-weight: 300;
      font-size: calc(var(--base-font-size) * 1.4);
      color: var(--primary);
    }

    &__article {
      width: 75%;
    }

    &__footer {
      font-size: calc(var(--base-font-size) * .8);
      color: var(--primary);
    }
  }
}
</style>
