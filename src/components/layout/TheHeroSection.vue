<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1>
          Mua 1 lần<br /><span class="hero-highlight"
            >Học trọn đời</span
          >
        </h1>

        <p class="hero-description">
          Khóa học lập trình chất lượng cao với giá cả phải chăng.<br />
          Học từ những giảng viên hàng đầu trong ngành công nghệ thông tin
        </p>

        <div class="hero-buttons">
          <a href="#courses" class="btn-primary">Xem Khóa Học</a>
          <a href="#feedback" class="btn-secondary" @click.prevent
            >Feedback từ khách hàng</a
          >
        </div>

        <div class="hero-features">
          <div class="hero-feature">
            <i class="fa-solid fa-download"></i>
            <span>Tải xuống video và tài liệu mọi lúc mọi nơi</span>
          </div>
        </div>
        <div class="hero-features">
          <div class="hero-feature">
            <i class="fa-solid fa-file"></i>
            <span>Đầy đủ video và tài liệu mới nhất</span>
          </div>
        </div>
        <div class="hero-features">
          <div class="hero-feature">
            <i class="fa-solid fa-clock"></i>
            <span>Sở hữu thời gian truy cập không giới hạn</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" ref="heroVisual">
        <div class="student-card">
          <div class="student-img">
            <img src="../../assets/images/image.png" alt="Học viên với laptop" />
          </div>
          <div style="text-align: center; color: #666; font-size: 0.9rem">
            Hơn 20.000 Học viên đăng kí
          </div>
        </div>

        <div class="stats-card" ref="statsCard">
          <div class="stats-icon">📊</div>
          <div class="stats-text">
            <h3 ref="statsNumber">3.000 +</h3>
            <p>Khóa học chất lượng</p>
          </div>
        </div>

        <div class="teacher-card">
          <div class="teacher-img">
            <img src="../../assets/images/image1.png" alt="Giảng viên chuyên nghiệp" />
          </div>
          <div style="text-align: center; color: #666; font-size: 0.9rem">
            Đội ngũ giảng viên giàu kinh nghiệm
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHeroSection",
  mounted() {
    // Parallax effect
    this._onScroll = () => {
      const scrolled = window.pageYOffset || 0;
      if (this.$refs.heroVisual) {
        this.$refs.heroVisual.style.transform = `translateY(${
          scrolled * -0.05
        }px)`;
      }
    };
    window.addEventListener("scroll", this._onScroll);

    // Counter on intersect
    const el = this.$refs.statsCard;
    if (el) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animateCounter(this.$refs.statsNumber, 3000);
              io.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );
      io.observe(el);
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this._onScroll);
  },
  methods: {
    animateCounter(el, target) {
      if (!el) return;
      let count = 0;
      const inc = target / 100;
      const timer = setInterval(() => {
        count += inc;
        if (count >= target) {
          count = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(count).toLocaleString() + " +";
      }, 20);
    },
  },
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
  margin-top: 70px;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="%23ffffff08" points="0,1000 1000,0 1000,1000"/></svg>');
  z-index: 1;
}
.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}
.hero-content h1 {
  color: #333333;
  font-size: 3.5rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
  margin-bottom: 20px;
  animation: slideInLeft 1s ease;
}
.hero-highlight {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: underline;
  text-decoration-color: rgba(127, 0, 255, 1);
  animation: glow 2s ease-in-out infinite alternate;
}
.hero-description {
  color: #666666;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 30px;
  animation: slideInLeft 1s ease 0.2s both;
}
.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  animation: slideInLeft 1s ease 0.4s both;
}
.btn-primary {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: #FFFFFF;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}
.btn-secondary {
  background: transparent;
  color: #333333;
  padding: 15px 30px;
  border: 2px solid rgba(127, 0, 255, 0.3);
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(127, 0, 255, 0.4);
}
.btn-secondary:hover {
  background: rgba(127, 0, 255, 0.1);
  transform: translateY(-3px);
  border-color: rgba(127, 0, 255, 0.5);
}
.hero-features {
  display: flex;
  gap: 30px;
  animation: slideInLeft 1s ease 0.6s both;
}
.hero-feature {
  display: flex;
  align-items: center;
  color: #666666;
  gap: 10px;
}
.hero-feature i.fa-download { color: #7f00ff; }
.hero-feature i.fa-file { color: #3a8b97; }
.hero-feature i.fa-clock { color: #ff6b6b; }
.hero-visual {
  position: relative;
  animation: slideInRight 1s ease;
}
.student-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;
}
.student-img {
  width: 100%;
  height: 250px;
  background: linear-gradient(45deg, #ff9a9e, #fecfef);
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  overflow: hidden;
}
.student-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 15px;
}
.stats-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  animation: float 3s ease-in-out infinite 1s;
}
.stats-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
.teacher-card {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 300px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite 2s;
}
.teacher-img {
  width: 100%;
  height: 150px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 15px;
  overflow: hidden;
}
.teacher-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 15px;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(127, 0, 255, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(127, 0, 255, 0.8);
  }
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>
