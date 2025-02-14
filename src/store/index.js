import { createStore } from "vuex";
import { setCookie, getCookie, removeCookie } from "../utils/cookies";

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
        const userWithoutPassword = { email: user.email };
        commit("setUser", userWithoutPassword);
        setCookie("auth_token", JSON.stringify(userWithoutPassword));
        localStorage.setItem("showBanner", "true");
        return Promise.resolve(true);
      }
      return Promise.reject("Invalid credentials");
    },
    logout({ commit }) {
      commit("clearUser");
      removeCookie("auth_token");
    },
    checkAuth({ commit }) {
      const authCookie = getCookie("auth_token");
      if (authCookie) {
        try {
          const user = JSON.parse(authCookie);
          commit("setUser", user);
          return true;
        } catch (e) {
          removeCookie("auth_token");
          return false;
        }
      }
      return false;
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },
});
