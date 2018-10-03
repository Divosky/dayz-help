<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <label for="toggleNavigation" class="nav__toggler"></label>
        <input id="toggleNavigation" type="checkbox">
        <router-link class="nav__item nav__link" to="/">Home</router-link>
        <router-link class="nav__item nav__link" to="/items">Items</router-link>
      </nav>
      <h1 class="header__branding">DayZ<span class="header__branding--primary">42O</span></h1>
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
  --border-radius: 3px;
  --base-color: #fafafa;
  --base-bg-color: #1a1a1a;
  --base-padding: 1rem;
  --base-margin: 1rem;
  --base-font-size: 1rem;
  //
  --nav-bg-color: #000000aa;
  --nav-link-color: var(--primary);
  --nav-link-bg--hover: #ffffff33;
  --nav-link-bg--active: #ffffff1a;
  //
  --main-bg: #000000dd;
  //
  --input-bg: var(--base-bg-color);
  --input-color: var(--base-color);
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
  font-size: var(--base-font-size);
  color: var(--base-color);
  background: var(--base-bg-color) url(https://i.imgur.com/hLCJx5y.png);
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
  background: var(--nav-bg-color);

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
    color: var(--nav-link-color);

    &:hover,
    &.router-link-exact-active:hover {
      background: var(--nav-link-bg--hover);
      transition: .13s ease-in-out;
    }

    &.router-link-exact-active {
      background: var(--nav-link-bg--active);
    }
  }
}

.header__branding {
 margin: calc(var(--base-margin) * 3) 0;
 text-align: center;
 font-size: calc(var(--base-font-size) * 3);
 font-weight: 300;

 &--primary {
   color: var(--primary);
 }
}

.main {
  background: var(--main-bg);
  border-radius: var(--border-radius);
  padding: calc(var(--base-padding) * .5) var(--base-padding);
  width: 75%;
  margin: 0 auto;
}

.footer {
  text-align: right;
  padding: 0 .5rem;
}

// Forms
.input {
  padding: calc(var(--base-padding) * .5) calc(var(--base-padding) * .7);
  background: var(--input-bg);
  border: 0;
  color: var(--input-color);
  border-radius: var(--border-radius)
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
