<template>
  <div class="promo-banner">
    <div class="banner-content">
      <div class="banner-child">
        <div class="banner-icon">
          <img src="@/assets/logo.svg" alt="Promo" />
        </div>
        <div class="banner-text">
          Here's a chance to further increase your ROI.
          <span class="price">Pay only $540.00</span>
          instead of
          <span class="strike">$590.00</span>
        </div>
      </div>

      <div class="banner-child">
        <button class="offer-btn">15% off for 3 months</button>
        <button class="close-btn" @click="$emit('close')">
          <span>&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoBanner",
};
</script>

<style scoped>
.promo-banner {
  background-color: #757ae933;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin: 0 auto;
}

.banner-icon {
  display: flex;
  align-items: center;
  height: 100%;
}

.banner-icon img {
  width: 20px;
  height: 20px;
}

.banner-text {
  font-size: 14px;
  color: #00056a;
  display: flex;
  align-items: center;
  gap: 6px;
}

.banner-child {
  display: flex;
  gap: 20px;
}

.price {
  color: #ffaabf;
  font-weight: 600;
}

.strike {
  text-decoration: line-through;
}

.offer-btn {
  background-color: #6e58f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}

.close-btn {
  margin-left: auto;
  background: none;
  border: none;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #1a1a1a;
}
</style>
