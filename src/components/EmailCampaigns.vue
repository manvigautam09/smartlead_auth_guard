<template>
  <div class="campaigns">
    <div class="campaigns-header">
      <div class="title-section">
        <h1>All Campaigns ({{ campaigns.length }})</h1>
        <div class="search-box">
          <input type="text" placeholder="Search Campaigns" />
          <button class="add-campaign">+ Add Campaign</button>
        </div>
      </div>
    </div>
    <div class="table-container">
      <div class="table-header">
        <div class="checkbox-col">
          <input type="checkbox" />
        </div>
        <div class="details-col">Campaign Details</div>
        <div class="report-col">Report</div>
      </div>

      <div class="campaigns-list">
        <div
          v-for="campaign in campaigns"
          :key="campaign.id"
          class="campaign-row"
        >
          <div class="checkbox-col">
            <input type="checkbox" />
          </div>

          <div class="details-col">
            <div class="campaign-info">
              <div class="progress-circle" :data-progress="campaign.progress">
                {{ campaign.progress }}%
              </div>
              <div class="campaign-details">
                <div class="campaign-name">
                  {{ campaign.name }}
                  <img src="@/assets/external-link.svg" alt="Open" />
                </div>
                <div class="campaign-meta">
                  {{ campaign.status }} on {{ campaign.date }} |
                  {{ campaign.sequences }} Sequences
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

.search-box input {
  width: 240px;
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  font-size: 14px;
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
  padding: 27px;
}

.table-header {
  display: flex;
  padding: 12px 24px;
  background: #e9ebf9;
  font-size: 14px;
  color: #686b8a;
  font-weight: 500;
}

.checkbox-col {
  width: 40px;
}

.details-col {
  flex: 1;
}

.report-col {
  flex: 2;
}

.campaign-row {
  display: flex;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
  align-items: center;
  background: #fff; /* Ensure white background when scrolling */
}

.campaign-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.progress-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f7f8fe;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
}

.campaign-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.campaign-name {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1a1a1a;
  font-weight: 500;
}

.campaign-meta {
  font-size: 12px;
  color: #666;
}

.metrics {
  display: flex;
  gap: 40px;
  min-width: 600px;
  justify-content: space-between;
}

.metric {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.value {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
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
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}

.percentage {
  color: #999;
}

.actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
}

.report-col {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.campaigns-list {
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Important for Firefox */
}
</style>
