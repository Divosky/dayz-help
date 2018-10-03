<template>
  <main class="main">
    <section class="page__header">
      <h3 class="page__title">Home Page</h3>
    </section>
    <section class="news">
      <div class="branding-image">
        <img src="http://www.game-state.com/46.105.43.212:1420/560x95_FFFFFF_FF9900_000000_000000.png" alt="Server Tracker">
      </div>
      <p>
        The 42O DayZ is a SA-MP server which is set in a post apocalyptic world where
        the tri-state area of San Andreas has been over-ran by zombies.
      </p>
      <p>
        The DayZ server has an exclusive post apocalyptic map ranging from deep green forests,
        desert wastelands (commonly known as the bad-lands) and abandoned cities.
        Throughout the map you will be able to find exclusively mapped zones such as
        gang/player houses,fortified compounds, a multitude of custom vehicles,
        secret islands and much more.
      </p>
      <div class="branding-image">
        <img src="https://i.imgur.com/MT0X4Yx.jpg" alt="Fort Carson Village">
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HelloWorld',
};
</script>

<style scoped lang="scss">
.branding-image {
  text-align: center;

  img {
    max-width: 100%;
  }
}
.news {
  text-align: justify;
  margin: var(--base-margin) auto;
}
@media (min-width: 700px) {
  .news {
    width: 75%;
  }
}
</style>
