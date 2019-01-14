<template>
  <div id="app" class="app-wrapper">
    <localizer>
      <navbar v-if="loggedIn"/>
      <main class="container" role="main">
        <router-view />
      </main>
    </localizer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Localizer from './components/Localizer'
import Auth from './components/Authorization'

export default {
  name: 'App',
  components: {
    Localizer,
    navbar: Navbar,
    Login: Auth
  },
  computed: {
    alert () {
      return this.$store.state.alert
    },
    ...mapGetters({
      loggedIn: 'authentication'
    })
  },
  watch: {
    $route (to, from) {
      this.$store.dispatch('alert/clear')
    }
  }
}
</script>

<style scoped>
  .app-wrapper {
    margin: 85px;
  }
</style>
