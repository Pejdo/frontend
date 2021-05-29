<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a href="/"></a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/">Food4You</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/registracija">Registracija</router-link>
            </li>
            <!--     <li><router-link to="/about">About</router-link></li> -->
            <li><router-link to="/recept">Recept</router-link></li>
            <li class="nav-item">
              <router-link to="/newrecept">Unos recepta</router-link>
            </li>
          </ul>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              @click="recept"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
$siva: rgb(15, 9, 9);

#app {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, San Francisco UI;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
ul > li > a {
  float: left;
  text-decoration: none;
  color: $siva;
}
@media (min-width: 1024px) {
  ul > li {
    margin-left: 5px;
  }
}
</style>
<script>
export default {
  methods: {
    recept() {
      this.$router.push("/recept");
    },
  },
};
</script>
