<template>
  <header class="header">
    <div class="nav-container">
      <a href="#" class="logo" @click.prevent>
        <div class="logo-icon">
          <img src="../../assets/images/logo.png" alt="HTech Logo" />
        </div>
        <div>
          <div>HTECH</div>
          <div style="font-size: 0.7rem; font-weight: normal; opacity: 0.8">
            NÂNG TẦM TRI THỨC VIỆT
          </div>
        </div>
      </a>

      <nav>
        <ul class="nav-menu">
          <li><a href="#" @click.prevent="showCategories">Danh mục</a></li>
          <li><a href="#" @click.prevent>Trang Chủ</a></li>
          <li><a href="#" @click.prevent>Hướng Dẫn Mua Hàng</a></li>
          <li><a href="#" @click.prevent>Liên Hệ</a></li>
        </ul>
      </nav>

      <div class="cart-user">
        <a href="#" class="cart" @click.prevent>
          🛒
          <span class="cart-count">1</span>
        </a>
        <button class="user-btn" type="button">Hội Viên</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    showCategories() {
      const categories = [
        "Lập trình Web",
        "Mobile Development",
        "Data Science & AI",
        "Backend Development",
        "Frontend Frameworks",
        "DevOps & Cloud",
        "Game Development",
        "Machine Learning",
      ];
      alert(
        "Danh mục khóa học:\n\n" +
          categories.map((c, i) => `${i + 1}. ${c}`).join("\n")
      );
    },
  },
};
</script>

<style scoped>
/* Header */
.header {
  background: rgba(255, 255, 255, 0.95);
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.logo {
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 12px;
}
.logo:hover {
  background: rgba(127, 0, 255, 0.05);
  transform: translateY(-1px);
}
.logo div:last-child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.logo div:last-child div:first-child {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.logo-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
  border-radius: 12px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  border: 2px solid rgba(127, 0, 255, 0.1);
}
.logo-icon:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(127, 0, 255, 0.3);
  border-color: rgba(127, 0, 255, 0.3);
}
.logo-icon img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(127, 0, 255, 0.2));
}
.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}
.nav-menu a {
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 16px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
}
.nav-menu a:hover {
  transform: translateY(-2px);
  background: rgba(127, 0, 255, 0.1);
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.2);
  color: rgba(127, 0, 255, 1);
}
.nav-menu a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #00d2ff, #ff6a88);
  transition: width 0.3s ease;
  border-radius: 2px;
}
.nav-menu a:hover::after {
  width: 100%;
}
.cart-user {
  display: flex;
  align-items: center;
  gap: 15px;
}
.cart {
  position: relative;
  color: white;
  text-decoration: none;
}
.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff6b6b;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 2s infinite;
}
.user-btn {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.3);
}
.user-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.4);
  background: linear-gradient(90deg, rgba(117, 0, 245, 1) 0%, rgba(215, 0, 245, 1) 100%);
}

/* Animations used here */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translateY(0);
  }
  40%,
  43% {
    transform: translateY(-10px);
  }
  70% {
    transform: translateY(-5px);
  }
  90% {
    transform: translateY(-2px);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
