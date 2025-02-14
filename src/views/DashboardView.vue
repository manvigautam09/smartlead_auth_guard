<template>
  <div class="dashboard">
    <PromoBanner v-if="showBanner" @close="showBanner = false" />
    <header class="header">
      <div class="header-left">
        <img src="@/assets/logo.svg" alt="Smartlead.ai" class="logo" />
        <img
          src="@/assets/banner.svg"
          alt="Offer banner"
          class="banner"
          width="100"
          height="15"
        />
      </div>
      <div class="header-right">
        <div class="trial-info">
          <img src="@/assets/ai.svg" alt="Timer" />
          <span>Trial expires in 12 days</span>
        </div>
        <button class="help-btn">
          <img src="@/assets/help.svg" alt="Help" />
        </button>
        <button class="gift-btn">
          <img src="@/assets/gift.svg" alt="Gift" />
        </button>
        <div class="user-profile">
          <img src="@/assets/avatar.svg" alt="User avatar" />
        </div>
      </div>
    </header>

    <div class="content">
      <aside class="sidebar">
        <nav class="nav-list">
          <a href="#" class="nav-item active">
            <img src="@/assets/leads.svg" alt="" />
            <span>All Leads</span>
          </a>
          <a href="#" class="nav-item">
            <img src="@/assets/inbox.svg" alt="" />
            <span>Master Inbox</span>
          </a>
          <a href="#" class="nav-item">
            <img src="@/assets/campaigns.svg" alt="" />
            <span>Email Campaigns</span>
          </a>
        </nav>

        <div>
          <a href="#" class="nav-item">
            <img src="@/assets/slack.svg" alt="" />
            <span>Join Slack Community</span>
          </a>
          <a href="#" class="nav-item">
            <img src="@/assets/tutorials.svg" alt="" />
            <span>Smartlead Tutorials</span>
          </a>
        </div>
      </aside>

      <main class="main-content">
        <div class="welcome-section">
          <h1>Get Free New Contacts and Leads</h1>
          <p>
            Scrape verified emails straight from LinkedIn using our Sales
            Navigator lead extractor. Download the extension and kick off!
          </p>

          <img
            src="@/assets/leads-illustration.svg"
            alt="Leads illustration"
            class="illustration"
          />
          <button class="add-chrome-btn">Add to Chrome</button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import PromoBanner from "@/components/PromoBanner.vue";

export default {
  name: "DashboardView",
  components: {
    PromoBanner,
  },
  data() {
    return {
      showBanner: true,
    };
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
  min-height: 100vh;
  background-color: #f7f8fe;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #00056a;
  height: 50px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  height: 32px;
}

.banner {
  height: 32px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.trial-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 16px;
}

.help-btn,
.gift-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.user-profile {
  margin-top: 5px;
}

.content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 240px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-list {
  padding: 0;
  margin: 0;
  margin-top: 10px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  color: #282b42;
  text-decoration: none;
  font-size: 14px;
  margin: 0px;
  font-weight: 400;
}

.nav-item.active {
  background-color: #757ae91a;
  color: #757ae9;
  font-size: 14px;
}

.nav-item:hover:not(.active) {
  background-color: #757ae91a;
  color: #282b42;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome-section {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.welcome-section h1 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.welcome-section p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
}

.illustration {
  max-width: 500px;
  margin-bottom: 32px;
}

.add-chrome-btn {
  background-color: #6e58f1;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-chrome-btn:hover {
  background-color: #5a47d6;
}
</style>
