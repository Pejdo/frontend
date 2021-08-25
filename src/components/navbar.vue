<template>
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
          <li><router-link to="/kategorije">Kategorije</router-link></li>
          <li class="nav-item">
            <a
              v-if="
                !auth.authenticated &&
                  $router.currentRoute.path != '/prijava' &&
                  $router.currentRoute.path != '/registracija'
              "
            >
              <router-link to="/prijava">Login</router-link>
            </a>
          </li>

          <!--     <li><router-link to="/about">About</router-link></li> -->
          <li><router-link to="/recept">Recept</router-link></li>
          <li class="nav-item">
            <router-link to="/newrecept">Unos recepta</router-link>
          </li>
          <li>
            <a v-if="auth.authenticated">
              <router-link to="/useracc">
                {{ username }}
              </router-link>
              <span class="odjava" style="cursor:pointer" @click="logout">
                Odjava</span
              >
            </a>
          </li>
          <!--   <li class="nav-item">
            <router-link to="/profil">profil aka recept edit </router-link>
          </li> -->
          <!--   <li class="nav-item">
            <router-link to="/useracc">Profil </router-link>
          </li> -->
        </ul>

        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="search"
            @keyup.enter="makeSearch"
            preventDefault
          />
          <button
            class="btn btn-outline-success"
            type="button"
            @click="makeSearch"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
import _ from 'lodash'
import { Auth } from '@/services/auth'
export default {
  data() {
    return {
      search: '',
      auth: Auth.state,
      username: 'user',
    }
  },
  methods: {
    makeSearch() {
      this.$emit('search', this.search)
    },
    logout() {
      Auth.logout()
      this.$router.go()
    },
    getName() {
      this.username =
        Auth.getUsersName() === false ? 'user' : Auth.getUsersName()
    },
  },
  mounted() {
    this.getName()
    console.log(Auth.getUsersName() === false)
  },
  watch: {
    search: _.debounce(function() {
      this.makeSearch()
    }, 499),
  },
}
</script>

<style lang="scss">
$siva: rgb(15, 9, 9);
ul > li > a {
  float: left;
  text-decoration: none;
  color: $siva;
  a {
    text-decoration: none !important;
    color: $siva;
  }
}
.odjava {
  display: block;
}
@media (min-width: 720px) {
  .odjava {
    display: inline-block;
  }
}
@media (min-width: 1024px) {
  ul > li {
    margin-left: 5px;
  }
}
</style>
