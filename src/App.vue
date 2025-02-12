<template>
  <nav v-if="isAuthenticated">
    <router-link to="/login">Login</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  async created() {
    await this.$store.dispatch("checkAuth");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
