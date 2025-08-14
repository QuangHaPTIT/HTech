<template>
  <section class="features">
    <div class="features-container">
      <div class="section-title">
        <h2>Tại sao chọn chúng tôi?</h2>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📥</div>
          <h3>Được quyền tải xuống</h3>
          <p>Tải xuống video và tài liệu mọi lúc mọi nơi</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Update thường xuyên</h3>
          <p>Đẩy đủ video và tài liệu mới nhất</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Truy cập trọn đời</h3>
          <p>Sở hữu quyền truy cập không giới hạn</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "TheFeaturesSection" };
</script>

<style scoped>
.features {
  padding: 80px 0;
  background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
  position: relative;
}
.features::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 236, 210, 0.1) 100%);
  pointer-events: none;
}
.section-title h2 {
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #333333;
  margin-bottom: 20px;
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 50px;
}
.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}
.feature-card:hover::before {
  transform: scaleX(1);
}
.feature-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 1);
}
.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  border-radius: 20px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 2rem;
  box-shadow: 0 8px 20px rgba(127, 0, 255, 0.3);
  transition: all 0.3s ease;
}
.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 12px 30px rgba(127, 0, 255, 0.5);
}
.feature-card h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
}
.feature-card p {
  color: #666;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}
</style>
