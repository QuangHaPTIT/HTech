<template>
  <div>
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
            <li class="nav-item-with-dropdown">
              <a href="#" @click.prevent class="nav-link">
                Danh mục
              </a>
              
              <!-- Categories Dropdown Menu -->
              <div class="categories-dropdown">
                <div class="categories-grid">
                  <div class="category-column">
                    <h4 class="category-title">💻 Lập Trình Web</h4>
                    <ul class="category-list">
                      <li><a href="#" @click.prevent>HTML & CSS</a></li>
                      <li><a href="#" @click.prevent>JavaScript</a></li>
                      <li><a href="#" @click.prevent>React.js</a></li>
                      <li><a href="#" @click.prevent>Vue.js</a></li>
                      <li><a href="#" @click.prevent>Angular</a></li>
                    </ul>
                  </div>
                  
                  <div class="category-column">
                    <h4 class="category-title">📱 Mobile Development</h4>
                    <ul class="category-list">
                      <li><a href="#" @click.prevent>React Native</a></li>
                      <li><a href="#" @click.prevent>Flutter</a></li>
                      <li><a href="#" @click.prevent>Swift iOS</a></li>
                      <li><a href="#" @click.prevent>Kotlin Android</a></li>
                      <li><a href="#" @click.prevent>Xamarin</a></li>
                    </ul>
                  </div>
                  
                  <div class="category-column">
                    <h4 class="category-title">🔧 Backend Development</h4>
                    <ul class="category-list">
                      <li><a href="#" @click.prevent>Node.js</a></li>
                      <li><a href="#" @click.prevent>Python Django</a></li>
                      <li><a href="#" @click.prevent>PHP Laravel</a></li>
                      <li><a href="#" @click.prevent>Java Spring</a></li>
                      <li><a href="#" @click.prevent>C# .NET</a></li>
                    </ul>
                  </div>
                  
                  <div class="category-column">
                    <h4 class="category-title">🤖 Data Science & AI</h4>
                    <ul class="category-list">
                      <li><a href="#" @click.prevent>Machine Learning</a></li>
                      <li><a href="#" @click.prevent>Deep Learning</a></li>
                      <li><a href="#" @click.prevent>Data Analysis</a></li>
                      <li><a href="#" @click.prevent>Python for AI</a></li>
                      <li><a href="#" @click.prevent>TensorFlow</a></li>
                    </ul>
                  </div>
                  
                  <div class="category-column">
                    <h4 class="category-title">☁️ DevOps & Cloud</h4>
                    <ul class="category-list">
                      <li><a href="#" @click.prevent>AWS</a></li>
                      <li><a href="#" @click.prevent>Docker</a></li>
                      <li><a href="#" @click.prevent>Kubernetes</a></li>
                      <li><a href="#" @click.prevent>CI/CD</a></li>
                      <li><a href="#" @click.prevent>Azure</a></li>
                    </ul>
                  </div>
                  
                  <div class="category-column">
                    <h4 class="category-title">🎮 Game Development</h4>
                    <ul class="category-list">
                      <li><a href="#" @click.prevent>Unity</a></li>
                      <li><a href="#" @click.prevent>Unreal Engine</a></li>
                      <li><a href="#" @click.prevent>Godot</a></li>
                      <li><a href="#" @click.prevent>C# Game Dev</a></li>
                      <li><a href="#" @click.prevent>Game Design</a></li>
                    </ul>
                  </div>
                </div>
                
                <!-- Popular Courses Preview -->
                <div class="dropdown-footer">
                  <div class="popular-preview">
                    <h5>🔥 Khóa học phổ biến</h5>
                    <div class="popular-items">
                      <div class="popular-item">
                        <img src="@/assets/images/course1.png" alt="Course" />
                        <span>JavaScript Pro</span>
                      </div>
                      <div class="popular-item">
                        <img src="@/assets/images/course2.png" alt="Course" />
                        <span>React Complete</span>
                      </div>
                      <div class="popular-item">
                        <img src="@/assets/images/course3.png" alt="Course" />
                        <span>Node.js Backend</span>
                      </div>
                    </div>
                  </div>
                  <a href="#" class="view-all-categories" @click.prevent>
                    Xem tất cả khóa học →
                  </a>
                </div>
              </div>
            </li>
            <li><a href="#" 
                  :class="{ 'active': $route.path === '/home' || $route.path === '/' }"
                  @click.prevent="handleHome">Trang Chủ</a></li>
            <li><a href="#" 
                  :class="{ 'active': $route.path === '/purchase-guide' }"
                  @click.prevent="handlePurchaseGuide">Hướng Dẫn Mua Hàng</a></li>
            <li><a href="#" 
                  :class="{ 'active': $route.path === '/contact' }"
                  @click.prevent="handleContact">Liên Hệ</a></li>
          </ul>
        </nav>

        <div class="cart-user">
          <!-- Search Icon -->
          <button class="search-icon" @click="toggleSearch">
            🔍
          </button>

          <a href="#" class="cart" @click.prevent="toggleCart">
            🛒
            <span class="cart-count">3</span>
          </a>
          <button class="user-btn" type="button">Hội Viên</button>
        </div>
      </div>
    </header>

    <!-- Search Bar Below Header -->
    <div class="search-overlay" v-if="showSearch" @click="closeSearch"></div>
    <div class="search-bar" v-if="showSearch">
      <div class="search-container">
        <div class="search-input-wrapper">
          <input 
            type="text" 
            class="search-input" 
            placeholder="Tìm kiếm khóa học..."
            v-model="searchQuery"
            @input="handleSearchInput"
            @focus="handleSearchFocus"
            @blur="handleSearchBlur"
            @keyup.enter="handleSearch"
            ref="searchInput"
          />
          <button class="search-submit" @click="handleSearch">
            🔍
          </button>
          <button class="search-close" @click="closeSearch">
            ✕
          </button>
          
          <!-- Search Dropdown -->
          <div class="search-dropdown" v-if="showDropdown && searchSuggestions.length > 0">
            <div class="dropdown-header">
              <span class="dropdown-title">Gợi ý khóa học</span>
            </div>
            <ul class="dropdown-list">
              <li 
                v-for="suggestion in searchSuggestions" 
                :key="suggestion.id"
                class="dropdown-item"
                @click="selectSuggestion(suggestion)"
              >
                <div class="suggestion-thumbnail">
                  <img :src="suggestion.thumbnail" :alt="suggestion.title" />
                </div>
                <div class="suggestion-content">
                  <span class="suggestion-title">{{ suggestion.title }}</span>
                </div>
              </li>
            </ul>
            <div class="dropdown-footer">
              <span class="view-all">Xem tất cả kết quả</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Component -->
    <TheCart :isVisible="showCart" @close="closeCart" />
  </div>
</template>

<script>
import { courseService } from "@/services/courseService";
import TheCart from "@/components/cart/TheCart.vue";
export default {
  name: "TheHeader",
  components: {
    TheCart
  },
  data() {
    return {
      showSearch: false,
      searchQuery: '',
      showDropdown: false,
      showCart: false,
      searchDebounceTimeout: null,
      // Fake data cho dropdown gợi ý
      searchSuggestions: []
    }
  },
  methods: {
    
    toggleSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }
    },

    toggleCart() {
      this.showCart = !this.showCart;
    },

    closeCart() {
      this.showCart = false;
    },
    
    closeSearch() {
      this.showSearch = false;
      this.searchQuery = '';
      this.showDropdown = false;
    },

    async handleSearch() {
      if (this.searchQuery.trim()) {
        console.log("Phần header", this.searchQuery.trim());
        this.$router.push({ name: 'course-search', query: { search: this.searchQuery } });
      }

      this.closeSearch();
    },

    // Methods cho search dropdown
    async handleSearchInput() {
      if(this.searchDebounceTimeout) {
        clearTimeout(this.searchDebounceTimeout);
      }
    
      // Hiển thị dropdown khi có text input
      if (this.searchQuery.trim().length < 2) {
        this.showDropdown = false;
        return;
      }

      this.searchDebounceTimeout = setTimeout(async () => {
        this.searchSuggestions = await courseService.searchCourses(this.searchQuery);
        console.log("Fet dữ liệu", this.searchSuggestions);
        this.showDropdown = true;
      }, 50);
    },

    handleSearchFocus() {
      // Hiển thị dropdown khi focus vào input (nếu có text)
      if (this.searchQuery.trim().length > 0) {
        this.showDropdown = true;
      }
    },

    handleSearchBlur() {
      // Delay để có thể click được vào item trong dropdown
      setTimeout(() => {
        this.showDropdown = false;
      }, 200);
    },

    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.title;
      this.showDropdown = false;
      // Có thể thêm logic navigate đến chi tiết khóa học
      if (this.$route.name !== 'courses')
      this.$router.push(`/courses/${suggestion.id}`);
    },
    
    handleHome() {
      if (this.$route.path !== '/home') {
        this.$router.push('/home');
      }
    },

    handlePurchaseGuide() {
      // Navigate đến trang hướng dẫn mua hàng
      if (this.$route.path !== '/purchase-guide') {
        this.$router.push('/purchase-guide');
      }
    },

    handleContact() {
      // Navigate đến trang liên hệ  
      if (this.$route.path !== '/contact') {
        this.$router.push('/contact');
      }
    }
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
  align-items: baseline;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  display: inline-block;
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
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #00d2ff, #ff6a88);
  transition: width 0.3s ease;
  border-radius: 2px;
}
.nav-menu a:hover::after {
  width: 100%;
  bottom: -6px;
}

/* Active State cho menu items */
.nav-menu a.active {
  background: rgba(127, 0, 255, 0.1);
  color: rgba(127, 0, 255, 1);
  font-weight: 600;
}

.nav-menu a.active::after {
  width: 100%;
  background: linear-gradient(45deg, rgba(127, 0, 255, 1), rgba(225, 0, 255, 1));
}

.cart-user {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Search Icon */
.search-icon {
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
  border: 2px solid rgba(127, 0, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  backdrop-filter: blur(10px);
  color: rgba(127, 0, 255, 0.8);
}

.search-icon:hover {
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.2) 0%, rgba(225, 0, 255, 0.2) 100%);
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.3);
  border-color: rgba(127, 0, 255, 0.4);
}

.search-icon:active {
  transform: scale(0.95);
}

/* Search Overlay */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

/* Search Bar Below Header */
.search-bar {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(127, 0, 255, 0.1);
  animation: slideDown 0.3s ease;
  padding: 20px 0;
}

.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.search-input-wrapper {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(127, 0, 255, 0.3);
  border-radius: 30px;
  padding: 12px 20px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.15);
  transition: all 0.3s ease;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-wrapper:focus-within {
  border-color: rgba(127, 0, 255, 0.5);
  box-shadow: 0 8px 30px rgba(127, 0, 255, 0.25);
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  font-family: 'Roboto', sans-serif;
}

.search-input::placeholder {
  color: #999;
}

.search-submit {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 14px;
  margin-left: 10px;
  flex-shrink: 0;
}

.search-submit:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.4);
}

.search-close {
  background: #ff6b6b;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-size: 14px;
  margin-left: 8px;
  flex-shrink: 0;
}

.search-close:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  background: #ff5252;
}

/* Search Dropdown */
.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(127, 0, 255, 0.1);
  border-top: none;
  z-index: 1001;
  max-height: 400px;
  overflow-y: auto;
  animation: slideDown 0.3s ease;
}

.dropdown-header {
  padding: 12px 20px;
  border-bottom: 1px solid rgba(127, 0, 255, 0.1);
  background: linear-gradient(90deg, rgba(127, 0, 255, 0.05) 0%, rgba(225, 0, 255, 0.05) 100%);
}

.dropdown-title {
  font-size: 14px;
  font-weight: 600;
  color: rgba(127, 0, 255, 0.8);
  font-family: 'Roboto', sans-serif;
}

.dropdown-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item:hover {
  background: linear-gradient(90deg, rgba(127, 0, 255, 0.08) 0%, rgba(225, 0, 255, 0.08) 100%);
  transform: translateX(2px);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.suggestion-thumbnail {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
  border: 2px solid rgba(127, 0, 255, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.suggestion-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.dropdown-item:hover .suggestion-thumbnail img {
  transform: scale(1.05);
}

.suggestion-content {
  flex: 1;
}

.suggestion-title {
  font-size: 15px;
  color: #333;
  font-weight: 500;
  line-height: 1.4;
  font-family: 'Roboto', sans-serif;
  display: block;
}

.dropdown-footer {
  padding: 12px 20px;
  text-align: center;
  border-top: 1px solid rgba(127, 0, 255, 0.1);
  background: linear-gradient(90deg, rgba(127, 0, 255, 0.03) 0%, rgba(225, 0, 255, 0.03) 100%);
}

.view-all {
  color: rgba(127, 0, 255, 0.8);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: 'Roboto', sans-serif;
}

.view-all:hover {
  color: rgba(127, 0, 255, 1);
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
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

/* Categories Dropdown */
.nav-item-with-dropdown {
  position: relative;
}

.nav-link {
  color: #333333;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 16px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  display: inline-block;
}

.nav-link:hover {
  transform: translateY(-2px);
  background: rgba(127, 0, 255, 0.1);
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.2);
  color: rgba(127, 0, 255, 1);
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #00d2ff, #ff6a88);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
  bottom: -6px;
}

.dropdown-arrow {
  font-size: 10px;
  transition: transform 0.3s ease;
  color: rgba(127, 0, 255, 0.6);
}

.nav-item-with-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
  color: rgba(127, 0, 255, 1);
}

.categories-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(127, 0, 255, 0.1);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-10px);
  transition: all 0.3s ease;
  padding: 30px;
  margin-top: 15px;
}

.nav-item-with-dropdown:hover .categories-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* Categories Grid Layout */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 40px;
  margin-bottom: 25px;
}

.category-column {
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0 0 15px 0;
  padding: 8px 12px;
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.08) 0%, rgba(225, 0, 255, 0.08) 100%);
  border-radius: 10px;
  border-left: 4px solid rgba(127, 0, 255, 0.6);
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  margin-bottom: 8px;
}

.category-list a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 8px;
  display: block;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
  position: relative;
}

.category-list a:hover {
  color: rgba(127, 0, 255, 1);
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
  transform: translateX(5px);
  box-shadow: 0 2px 10px rgba(127, 0, 255, 0.15);
}

.category-list a::before {
  content: '•';
  color: rgba(127, 0, 255, 0.5);
  font-weight: bold;
  margin-right: 8px;
  transition: all 0.3s ease;
}

.category-list a:hover::before {
  color: rgba(127, 0, 255, 1);
  transform: scale(1.2);
}

/* Dropdown Footer */
.dropdown-footer {
  border-top: 2px solid rgba(127, 0, 255, 0.1);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popular-preview h5 {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  font-family: 'Roboto', sans-serif;
}

.popular-items {
  display: flex;
  gap: 15px;
}

.popular-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(127, 0, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.popular-item:hover {
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.05) 0%, rgba(225, 0, 255, 0.05) 100%);
  border-color: rgba(127, 0, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.1);
}

.popular-item img {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.popular-item span {
  font-size: 12px;
  font-weight: 500;
  color: #555;
  white-space: nowrap;
}

.view-all-categories {
  color: rgba(127, 0, 255, 1);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
  border-radius: 25px;
  border: 1px solid rgba(127, 0, 255, 0.2);
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
}

.view-all-categories:hover {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .categories-dropdown {
    width: 750px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px 30px;
  }
}

@media (max-width: 768px) {
  .categories-dropdown {
    width: 95vw;
    left: 2.5vw;
    transform: none;
    padding: 20px;
  }
  
  .nav-item-with-dropdown:hover .categories-dropdown {
    transform: none;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .dropdown-footer {
    flex-direction: column;
    gap: 15px;
    align-items: stretch;
  }
  
  .popular-items {
    justify-content: center;
    flex-wrap: wrap;
  }
}

/* Animation cho dropdown arrow */
@keyframes arrowBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.nav-item-with-dropdown:hover .dropdown-arrow {
  animation: arrowBounce 1s ease infinite;
}

/* Hover effect cho entire nav item */
.nav-item-with-dropdown:hover .nav-link {
  background: rgba(127, 0, 255, 0.1);
  color: rgba(127, 0, 255, 1);
}

/* Animations */
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  
  .search-bar {
    top: 70px;
    padding: 15px 0;
  }
  
  .search-input-wrapper {
    margin: 0 10px;
    padding: 10px 15px;
  }
  
  .search-input {
    font-size: 14px;
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  .cart-user {
    gap: 10px;
  }
  
  .search-icon {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }
  
  .search-submit,
  .search-close {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
}
</style>