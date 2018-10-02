<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <label for="toggleNavigation" class="nav__toggler"></label>
        <input id="toggleNavigation" type="checkbox">
        <router-link class="nav__item nav__link" to="/">Home</router-link>
        <router-link class="nav__item nav__link" to="/items">Items</router-link>
      </nav>
    </header>
    <router-view/>
    <footer class="footer">
      <p class="copyright">&copy; {{ currentYear }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>


<style lang="scss">
:root {
  --primary: #42b983;
}

html,
body,
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  color: #fafafa;
  background: #1a1a1a url(https://i.imgur.com/hLCJx5y.png);
  background-attachment: fixed;
  background-size: cover;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background: #000000aa;

  &__toggler {
    &:after {
      content: 'U';
    }

    &+input {
      display: none;

      &:checked~.nav__item {
        display: block;
      }
    }
  }

  &__item {
    display: none;
    padding: .7rem;
  }

  &__link {
    text-decoration: none;
    color: var(--primary);

    &:hover,
    &.router-link-exact-active:hover {
      background: #ffffff33;
      transition: .13s ease-in-out;
    }

    &.router-link-exact-active {
      background: #ffffff1a;
    }
  }
}

.footer {
  text-align: right;
  padding: 0 .5rem;
}

@media (min-width: 700px) {
  .nav {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

     &__toggler {
       display: none;
     }

     &__item {
       display: block;
     }
  }
}
</style>
