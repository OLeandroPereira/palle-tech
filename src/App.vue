<template>
  <div id="app">
    <nav>
      <headerPage />
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  background-color: rgba(0, 0, 0, 0.755);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #afafc0;
}

a {
  color: #3b83cc;

  &.router-link-exact-active {
    color: #d1d1dd;
  }
}
</style>
