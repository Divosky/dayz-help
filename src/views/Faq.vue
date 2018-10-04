<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">FAQ</h3>
      <Loader v-if="loader" />
      <section class="faq">
        <dl class="faqs">
          <div v-for="faq in faqs.slice(0, 5)" :key="faq.id">
            <dt class="faqs__question">{{ faq.title }}</dt>
            <dd class="faqs__answer">{{ faq.body }}</dd>
          </div>
        </dl>
      </section>
    </section>
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue';

// Random content to have something to show
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default {
  name: 'faq',
  data() {
    return {
      faqs: [],
      loader: true,
    };
  },
  created() {
    const url = `${API_URL}`;
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.loader = false;
        this.faqs = data;
      });
  },
  components: {
    Loader,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_extends.scss';

.faq {
  @extend %content-container;
}

.faqs {
  counter-reset: questionNumber;

  &__question,
  &__answer {
    position: relative;
    margin: var(--base-margin) 0;
    padding-left: calc(var(--base-padding) * 2);
  }

  &__question {
    color: var(--primary);

    &:before {
      position: absolute;
      left: calc(var(--base-padding) * -.2);
      content: counter(questionNumber);
      counter-increment: questionNumber;
      font-size: calc(var(--base-font-size) * 1.5);
      display: inline-block;
    }
  }
}
</style>
