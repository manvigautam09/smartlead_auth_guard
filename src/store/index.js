import { createStore } from "vuex";

// Simulated user database
const users = [
  { email: "user@example.com", password: "password123" },
  { email: "admin@example.com", password: "admin123" },
];

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    login({ commit }, credentials) {
      const user = users.find(
        (u) =>
          u.email === credentials.email && u.password === credentials.password
      );

      if (user) {
        // Create a sanitized user object without the password
        const userWithoutPassword = { email: user.email };
        commit("setUser", userWithoutPassword);
        return Promise.resolve(true);
      }
      return Promise.reject("Invalid credentials");
    },
    logout({ commit }) {
      commit("clearUser");
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },
});
