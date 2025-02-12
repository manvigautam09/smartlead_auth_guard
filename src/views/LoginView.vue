<template>
  <div class="login">
    <div class="header">
      <img src="@/assets/logo.svg" alt="Smartlead.ai" />
      <img src="@/assets/banner.svg" alt="banner" class="left-margin" />
    </div>
    <div class="login-container">
      <h1>Welcome to Smartlead.ai</h1>
      <p class="subtitle">Log in to your account</p>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="email-label" for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <div class="form-group">
          <div class="password-label">
            <label for="password">Password</label>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>
          <div class="password-input">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              required
            />
            <button
              type="button"
              class="show-password"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? "Hide" : "Show" }}
            </button>
          </div>
        </div>

        <button type="submit" class="sign-in" :disabled="loading">
          {{ loading ? "Signing in..." : "Sign in" }}
        </button>
      </form>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      loading: false,
      showPassword: false,
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.error = "";

      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/dashboard");
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fe;
}

.header {
  background-color: #00056a;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
}

.left-margin {
  margin-left: 10px;
}

.email-label {
  display: flex;
  justify-content: flex-start;
}

.login-container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 440px;
  margin: 20px;
  margin-top: 8%;
}

.logo {
  margin-bottom: 24px;
}

.logo img {
  height: 32px;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  font-size: 14px;
  color: #1a1a1a;
  margin-bottom: 8px;
  font-weight: 500;
}

.password-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-password {
  font-size: 14px;
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  color: #1a1a1a;
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #6366f1;
}

.password-input {
  position: relative;
}

.show-password {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6366f1;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
}

.sign-in {
  width: 100%;
  padding: 12px;
  background-color: #f3f4f6;
  color: #666;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.sign-in:not(:disabled) {
  background-color: #6366f1;
  color: white;
}

.sign-in:not(:disabled):hover {
  background-color: #4f46e5;
}

.error-message {
  margin-top: 16px;
  color: #dc2626;
  font-size: 14px;
  text-align: center;
}
</style>
