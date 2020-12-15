<template>
  <div id="app">
    <div class="header">
      <div class="header__tittle">ХЕДЕР БУДЕТ НА КАЖДОЙ СТРАНИЦЕ</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.header{
  display: flex;
  justify-self: center;

  &__title {
    font-size: 34px;
  }
}
</style>
