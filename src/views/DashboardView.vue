<template>
  <div class="dashboard">
    <div class="header">
      <h1>Dashboard</h1>
      <button @click="handleLogout" class="logout-btn">Logout</button>
    </div>
    <div class="user-info">
      <p>Welcome, {{ currentUser.email }}!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.logout-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.logout-btn:hover {
  background-color: #c82333;
}

.user-info {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
}
</style>
