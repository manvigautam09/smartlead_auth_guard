<template>
  <div class="campaigns">
    <div class="campaigns-header">
      <div class="title-section">
        <h1>All Campaigns ({{ campaigns.length }})</h1>
        <div class="search-box">
          <div class="search-input">
            <img src="@/assets/search.svg" alt="Search" class="search-icon" />
            <input
              type="text"
              placeholder="Search Campaigns"
              class="search-input-tag"
            />
          </div>
          <button class="add-campaign">+ Add Campaign</button>
        </div>
      </div>
    </div>
    <div class="table-container">
      <div class="table-header">
        <div class="table-campaign">
          <div class="checkbox-col">
            <input type="checkbox" />
          </div>
          <div class="details-col">Campaign Details</div>
        </div>
        <div class="report-col">Report</div>
      </div>

      <div class="campaigns-list">
        <div
          v-for="campaign in campaigns"
          :key="campaign.id"
          class="campaign-row"
        >
          <div class="checkbox-col">
            <input type="checkbox" class="custom-checkbox" />
          </div>

          <div class="details-col">
            <div class="campaign-info">
              <div class="progress-circle">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="#E9EBF9"
                    stroke-width="4"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    :stroke="getStatusColor(campaign.status)"
                    stroke-width="4"
                    stroke-dasharray="100.53"
                    :stroke-dashoffset="calculateOffset(campaign.progress)"
                  />
                </svg>

                <span v-if="campaign.status === 'Sent'" class="progress-text"
                  >{{ campaign.progress }}%</span
                >

                <img
                  v-else
                  class="progress-text"
                  :src="
                    require(`@/assets/${campaign.status.toLowerCase()}.svg`)
                  "
                  :alt="campaign.status"
                />
              </div>
              <div class="campaign-details">
                <div class="campaign-name">
                  {{ campaign.name }}
                  <img
                    src="@/assets/external-link.svg"
                    alt="Open"
                    class="external-link"
                  />
                </div>
                <div class="campaign-meta">
                  <span class="status" :class="campaign.status.toLowerCase()">{{
                    campaign.status
                  }}</span>
                  on {{ campaign.date }} | {{ campaign.sequences }}
                </div>
              </div>
            </div>
          </div>

          <div class="report-col">
            <div class="metrics">
              <div class="metric">
                <span class="value">{{ campaign.metrics.sent }}</span>
                <span class="label">Sent</span>
              </div>
              <div class="metric">
                <span class="value highlight-purple">{{
                  campaign.metrics.clicked.value
                }}</span>
                <span class="label"
                  >Clicked
                  <span class="percentage"
                    >{{ campaign.metrics.clicked.percentage }}%</span
                  ></span
                >
              </div>
              <div class="metric">
                <span class="value highlight-pink">{{
                  campaign.metrics.opened.value
                }}</span>
                <span class="label"
                  >Opened
                  <span class="percentage"
                    >{{ campaign.metrics.opened.percentage }}%</span
                  ></span
                >
              </div>
              <div class="metric">
                <span class="value highlight-blue">{{
                  campaign.metrics.replied.value
                }}</span>
                <span class="label"
                  >Replied
                  <span class="percentage"
                    >{{ campaign.metrics.replied.percentage }}%</span
                  ></span
                >
              </div>
              <div class="metric">
                <span class="value highlight-green">{{
                  campaign.metrics.positive.value
                }}</span>
                <span class="label"
                  >Positive Reply
                  <img src="@/assets/info.svg" alt="Info" />
                </span>
              </div>
            </div>
            <div class="actions">
              <button class="action-btn">
                <img src="@/assets/info-circle.svg" alt="Info" />
              </button>
              <button class="action-btn">
                <img src="@/assets/edit.svg" alt="Edit" />
              </button>
              <button class="action-btn">
                <img src="@/assets/more.svg" alt="More" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCampaigns } from "@/constants/campaigns";

export default {
  name: "EmailCampaigns",
  data() {
    return {
      campaigns: getCampaigns(),
    };
  },
  methods: {
    calculateOffset(progress) {
      const circumference = 2 * Math.PI * 16; // 2πr where r=16
      const offset = circumference - (progress / 100) * circumference;
      return offset;
    },
    getStatusColor(status) {
      const colors = {
        Sent: "#5ECA39",
        Drafted: "none",
        Paused: "#DD9553",
        Stopped: "#CB4B4B",
      };
      return colors[status];
    },
  },
};
</script>

<style scoped>
.campaigns {
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.campaigns-header {
  padding: 14px;
  border-bottom: 1px solid #e1e3ef;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-section h1 {
  font-size: 20px;
  color: #1a1a1a;
  font-weight: 600;
}

.search-box {
  display: flex;
  gap: 16px;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input-tag:focus {
  outline: none;
}

.search-icon {
  position: absolute;
  left: 12px;
  width: 20px;
  height: 20px;
  color: #686b8a;
}

.search-input input {
  width: 240px;
  padding: 8px 16px 8px 40px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  font-size: 14px;
  color: #686b8a;
}

.search-input input::placeholder {
  color: #686b8a;
}

.add-campaign {
  background: #6e58f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.table-container {
  padding: 20px;
  background: #f7f8fe;
}

.table-header {
  display: flex;
  padding: 12px 24px;
  background: #e9ebf9;
  font-size: 16px;
  color: #686b8a;
  font-weight: 600;
}

.table-campaign {
  display: flex;
  flex: 1;
}
.checkbox-col {
  width: 40px;
}

.details-col {
  flex: 1;
  display: flex;
}

.report-col {
  flex: 2;
}

.campaign-row {
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  align-items: center;
  background: #fff;
}

.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 1.5px solid #d0d3e5;
  border-radius: 4px;
  cursor: pointer;
}

.campaign-info {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 24px;
}

.progress-circle {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8fe;
  border-radius: 50%;
}

.progress-circle svg {
  transform: rotate(-90deg);
  overflow: visible;
}

.progress-circle circle {
  transition: stroke-dashoffset 0.3s ease;
}

.progress-text {
  position: absolute;
  font-size: 12px;
  color: #686b8a;
  font-weight: 500;
}

.campaign-details {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.campaign-name {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
}

.external-link {
  width: 16px;
  height: 16px;
  opacity: 0.6;
}

.campaign-meta {
  font-size: 12px;
  color: #686b8a;
  display: flex;
  align-items: center;
  gap: 4px;
}

.status {
  font-weight: 500;
}

.status.sent {
  color: #5eca39;
}
.status.drafted {
  color: #686b8a;
}
.status.paused {
  color: #dd9553;
}
.status.stopped {
  color: #cb4b4b;
}

.metrics {
  display: flex;
  gap: 40px;
  padding: 0 24px;
}

.metric {
  min-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.value {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 24px;
}

.highlight-purple {
  color: #757ae9;
}
.highlight-pink {
  color: #ff4d4d;
}
.highlight-blue {
  color: #00b3ff;
}
.highlight-green {
  color: #00b67a;
}

.label {
  font-size: 12px;
  color: #686b8a;
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 18px;
}

.percentage {
  color: #9699ab;
}

.actions {
  display: flex;
  gap: 4px;
  margin-left: auto;
}

.action-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
}

.action-btn:hover {
  background: #f7f8fe;
}

.campaigns-list {
  min-height: 0; /* Important for Firefox */
  overflow: auto;
  max-height: 600px;
}
</style>
