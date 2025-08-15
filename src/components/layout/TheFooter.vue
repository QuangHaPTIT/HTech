<template>
  <!-- Footer -->
  <footer class="footer">
    <!-- Animated Background Elements -->
    <div class="footer-bg">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
      <div class="grid-overlay"></div>
    </div>
    
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-section brand-section">
          <div class="footer-logo">
            <div class="logo-icon">
              <i class="fas fa-graduation-cap"></i>
              <div class="logo-glow"></div>
            </div>
            <div class="logo-content">
              <div class="logo-text">HTECH</div>
              <div class="logo-subtitle">NÂNG TẦM TRI THỨC VIỆT</div>
            </div>
          </div>
          <p class="footer-desc">
            Nền tảng học lập trình trực tuyến hàng đầu Việt Nam, cung cấp các
            khóa học chất lượng cao từ cơ bản đến nâng cao.
          </p>
          <div class="social-links">
            <a href="#" class="social-link facebook">
              <i class="fab fa-facebook-f"></i>
              <span class="social-tooltip">Facebook</span>
            </a>
            <a href="#" class="social-link youtube">
              <i class="fab fa-youtube"></i>
              <span class="social-tooltip">YouTube</span>
            </a>
            <a href="#" class="social-link telegram">
              <i class="fab fa-telegram"></i>
              <span class="social-tooltip">Telegram</span>
            </a>
            <a href="#" class="social-link instagram">
              <i class="fab fa-instagram"></i>
              <span class="social-tooltip">Instagram</span>
            </a>
          </div>
        </div>

        <!-- Courses Section -->
        <div class="footer-section">
          <h3 class="section-title">
            <i class="fas fa-code"></i>
            Khóa Học
          </h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-chevron-right"></i>Lập trình Web</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Mobile Development</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Data Science & AI</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Backend Development</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>DevOps & Cloud</a></li>
          </ul>
        </div>

        <!-- Support Section -->
        <div class="footer-section">
          <h3 class="section-title">
            <i class="fas fa-headset"></i>
            Hỗ Trợ
          </h3>
          <ul class="footer-links">
            <li><a href="#"><i class="fas fa-chevron-right"></i>Hướng dẫn mua hàng</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Chính sách bảo mật</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Điều khoản sử dụng</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Câu hỏi thường gặp</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i>Liên hệ hỗ trợ</a></li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-section">
          <h3 class="section-title">
            <i class="fas fa-phone-alt"></i>
            Liên Hệ
          </h3>
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <span class="contact-label">Email</span>
                <span class="contact-value">support@htech.vn</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <span class="contact-label">Hotline</span>
                <span class="contact-value">+84 123 456 789</span>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <span class="contact-label">Địa chỉ</span>
                <span class="contact-value">Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h3>Đăng ký nhận thông tin khóa học mới</h3>
            <p>Cập nhật những khóa học và ưu đãi mới nhất từ HTech</p>
          </div>
          <div class="newsletter-form">
            <div class="input-group">
              <input type="email" placeholder="Nhập email của bạn">
              <button type="submit">
                <i class="fas fa-paper-plane"></i>
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; 2024 HTech. Tất cả quyền được bảo lưu.</p>
          </div>
          <div class="footer-bottom-links">
            <a href="#">Chính sách</a>
            <a href="#">Điều khoản</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      
    }
  },
}
</script>

<style scoped>
/* Footer */
.footer {
  position: relative;
  background: linear-gradient(135deg, #0f0c29 0%, #24243e 50%, #302b63 100%);
  color: white;
  padding: 80px 0 0;
  overflow: hidden;
}

/* Animated Background */
.footer-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(30, 144, 255, 0.1));
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 10%;
  animation-delay: 1s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  top: 10%;
  right: 30%;
  animation-delay: 2s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  bottom: 20%;
  left: 30%;
  animation-delay: 3s;
}

.shape-5 {
  width: 90px;
  height: 90px;
  top: 40%;
  left: 50%;
  animation-delay: 4s;
}

/* Container */
.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer Content */
.footer-content {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1.2fr;
  gap: 50px;
  margin-bottom: 60px;
}

/* Brand Section */
.brand-section {
  position: relative;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.logo-icon {
  position: relative;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #8b2cf5 0%, #1e90ff 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  box-shadow: 0 10px 30px rgba(139, 44, 245, 0.3);
  animation: logoGlow 2s ease-in-out infinite alternate;
}

.logo-icon i {
  font-size: 24px;
  color: white;
  z-index: 2;
  position: relative;
}

.logo-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, #8b2cf5, #1e90ff);
  border-radius: 15px;
  filter: blur(10px);
  opacity: 0.7;
  z-index: 1;
}

.logo-content .logo-text {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #8b2cf5 0%, #1e90ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.logo-content .logo-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.footer-desc {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 15px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.social-link.facebook::before { background: linear-gradient(45deg, #3b5998, #4267B2); }
.social-link.youtube::before { background: linear-gradient(45deg, #ff0000, #cc0000); }
.social-link.telegram::before { background: linear-gradient(45deg, #0088cc, #229ED9); }
.social-link.instagram::before { background: linear-gradient(45deg, #E4405F, #C13584); }

.social-link:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.social-link:hover::before {
  left: 0;
}

.social-link i {
  position: relative;
  z-index: 2;
  font-size: 18px;
}

.social-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.social-link:hover .social-tooltip {
  opacity: 1;
  margin-bottom: 5px;
}

/* Section Titles */
.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 25px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #8b2cf5, #1e90ff);
  border-radius: 2px;
}

.section-title i {
  color: #8b2cf5;
  font-size: 16px;
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 15px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-size: 14px;
  padding: 5px 0;
}

.footer-links a i {
  font-size: 10px;
  color: #8b2cf5;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: #8b2cf5;
  transform: translateX(5px);
}

.footer-links a:hover i {
  transform: translateX(3px);
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(139, 44, 245, 0.2), rgba(30, 144, 255, 0.2));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(139, 44, 245, 0.3);
}

.contact-icon i {
  color: #8b2cf5;
  font-size: 16px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.contact-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.contact-value {
  color: white;
  font-size: 14px;
  font-weight: 500;
}

/* Newsletter Section */
.newsletter-section {
  background: linear-gradient(135deg, rgba(139, 44, 245, 0.1), rgba(30, 144, 255, 0.1));
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.newsletter-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.newsletter-text h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #8b2cf5 0%, #1e90ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.newsletter-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.input-group {
  display: flex;
  gap: 10px;
  min-width: 350px;
}

.input-group input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14px;
  transition: all 0.3s ease;
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.input-group input:focus {
  outline: none;
  border-color: #8b2cf5;
  box-shadow: 0 0 20px rgba(139, 44, 245, 0.3);
}

.input-group button {
  padding: 15px 25px;
  background: linear-gradient(135deg, #8b2cf5 0%, #1e90ff 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  white-space: nowrap;
}

.input-group button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 44, 245, 0.4);
}

/* Footer Bottom */
.footer-bottom {
  padding: 30px 0;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin-bottom: 25px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  gap: 25px;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #8b2cf5;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes logoGlow {
  0% { box-shadow: 0 10px 30px rgba(139, 44, 245, 0.3); }
  100% { box-shadow: 0 15px 40px rgba(139, 44, 245, 0.5); }
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  .newsletter-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  
  .input-group {
    min-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .newsletter-section {
    padding: 30px 20px;
  }
  
  .input-group {
    flex-direction: column;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .logo-content .logo-text {
    font-size: 24px;
  }
  
  .newsletter-text h3 {
    font-size: 20px;
  }
  
  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>