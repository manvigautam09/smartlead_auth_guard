<template>
  <div class="user-dropdown">
    <img
      src="@/assets/avatar.svg"
      alt="User avatar"
      class="avatar"
      @click="isOpen = !isOpen"
    />

    <div v-if="isOpen" class="dropdown-menu">
      <div class="user-info">
        <img src="@/assets/avatar.svg" alt="User avatar" class="user-avatar" />
        <div class="user-details">
          <div class="user-name">Jerome Carlson</div>
          <div class="user-email">jerome.carlson@example.com</div>
        </div>
      </div>

      <div class="credit-usage">
        <div class="credit-title">Your credit usage detail</div>
        <div class="credit-item">
          <div class="credit-label">Active Leads:</div>
          <div class="credit-value">
            <span>84,000</span>
            <span class="credit-total">/ 90,000</span>
          </div>
          <div class="credit-bar">
            <div
              class="credit-progress"
              style="width: 93%; background: #dd9553"
            ></div>
          </div>
        </div>
        <div class="credit-item">
          <div class="credit-label">Email Credits:</div>
          <div class="credit-value">
            <span>24,000</span>
            <span class="credit-total">/ 90,000</span>
          </div>
          <div class="credit-bar">
            <div
              class="credit-progress"
              style="width: 27%; background: #6ccb4b"
            ></div>
          </div>
        </div>
        <a href="#" class="get-credits">Get credits</a>
      </div>

      <div class="dropdown-items">
        <button class="dropdown-item">
          <img src="@/assets/settings.svg" alt="Settings" />
          Settings
        </button>
        <button class="dropdown-item">
          <img src="@/assets/gift.svg" alt="What's New" />
          What's New
        </button>
        <button class="dropdown-item">
          <img src="@/assets/help.svg" alt="Help Guide" />
          Help Guide
        </button>
        <button class="dropdown-item">
          <img src="@/assets/slack.svg" alt="Slack" />
          Join our slack community
        </button>
        <button class="dropdown-item" @click="handleLogout">
          <img src="@/assets/logout.svg" alt="Logout" />
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDropdown",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.user-dropdown {
  position: relative;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 1px);
  right: 0;
  width: 280px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
  z-index: 10;
}

.user-info {
  padding: 16px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #e1e3ef;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-name {
  font-weight: 500;
  color: #1a1a1a;
  font-size: 14px;
}

.user-email {
  color: #686b8a;
  font-size: 14px;
}

.credit-usage {
  padding: 16px;
  border-bottom: 1px solid #e1e3ef;
}

.credit-title {
  font-weight: 500;
  color: #1a1a1a;
  font-size: 14px;
  margin-bottom: 16px;
}

.credit-item {
  margin-bottom: 12px;
}

.credit-label {
  color: #686b8a;
  font-size: 12px;
  margin-bottom: 4px;
}

.credit-value {
  display: flex;
  gap: 4px;
  font-size: 12px;
  margin-bottom: 8px;
}

.credit-total {
  color: #9699ab;
}

.credit-bar {
  height: 4px;
  background: #e9ebf9;
  border-radius: 2px;
  overflow: hidden;
}

.credit-progress {
  height: 10px;
  border-radius: 1px;
}

.get-credits {
  color: #6e58f1;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
}

.dropdown-items {
  padding: 8px;
}

.dropdown-item {
  width: 100%;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  color: #1a1a1a;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  text-align: left;
}

.dropdown-item:hover {
  background: #f7f8fe;
}

.dropdown-item img {
  width: 20px;
  height: 20px;
}
</style>
