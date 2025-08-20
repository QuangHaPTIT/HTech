<template>
  <div class="category-section">
    <!-- Header Section -->
    <div class="header">
      <h2 class="title">Danh mục khác</h2>
      <p class="subtitle">Các danh mục khóa học phổ biến</p>
    </div>

    <!-- Categories Grid -->
    <div class="categories-wrapper">
      <div class="categories-grid">
        <div
          v-for="category in visibleCategories"
          :key="category.id"
          class="category-card"
          @click="handleCategoryClick(category)"
        >
          <div class="category-icon" :style="{ backgroundColor: category.iconBg }">
            <i :class="category.iconClass" :style="{ color: category.iconColor }"></i>
          </div>
          <div class="category-info">
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-description">{{ category.description }}</p>
            <span class="course-count">{{ category.courseCount }}</span>
          </div>
        </div>
      </div>

      <!-- Navigation Controls -->
      <div class="navigation-controls">
        <button 
          class="nav-arrow nav-prev" 
          @click="previousSlide"
          :disabled="currentSlide === 0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="dots-indicator">
          <span
            v-for="(dot, index) in totalSlides"
            :key="index"
            class="dot"
            :class="{ active: index === currentSlide }"
            @click="goToSlide(index)"
          ></span>
        </div>

        <button 
          class="nav-arrow nav-next" 
          @click="nextSlide"
          :disabled="currentSlide === totalSlides - 1"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Thank You Message -->
    <div class="thank-you-section">
      <p class="thank-you-text">Cảm ơn quý khách đã xem</p>
    </div>

    <!-- Partner Brands -->
    <div class="partner-brands">
      <div class="brand-logo">
        <span class="brand-text amazon">amazon</span>
      </div>
      <div class="brand-logo">
        <span class="brand-text amd">AMD</span>
      </div>
      <div class="brand-logo">
        <span class="brand-text cisco">cisco</span>
      </div>
      <div class="brand-logo">
        <span class="brand-text dropcom">dropcom</span>
      </div>
      <div class="brand-logo">
        <span class="brand-text logitech">logitech</span>
      </div>
      <div class="brand-logo">
        <span class="brand-text spotify">Spotify</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCategorySection',
  data() {
    return {
      currentSlide: 0,
      itemsPerSlide: 6,
      categories: [
        {
          id: 1,
          name: 'Personal',
          description: 'Development',
          courseCount: '908+ Courses',
          iconClass: 'fas fa-user-tie',
          iconColor: '#6366f1',
          iconBg: '#f0f0ff'
        },
        {
          id: 2,
          name: 'Finance',
          description: 'Accounting',
          courseCount: '129+ Courses',
          iconClass: 'fas fa-chart-line',
          iconColor: '#10b981',
          iconBg: '#f0fdf9'
        },
        {
          id: 3,
          name: 'Design',
          description: 'Creative',
          courseCount: '573+ Courses',
          iconClass: 'fas fa-palette',
          iconColor: '#f59e0b',
          iconBg: '#fffbeb'
        },
        {
          id: 4,
          name: 'Sales',
          description: 'Marketing',
          courseCount: '565+ Courses',
          iconClass: 'fas fa-bullhorn',
          iconColor: '#ef4444',
          iconBg: '#fef2f2'
        },
        {
          id: 5,
          name: 'Development',
          description: 'IT',
          courseCount: '126+ Courses',
          iconClass: 'fas fa-laptop-code',
          iconColor: '#8b5cf6',
          iconBg: '#f5f3ff'
        },
        {
          id: 6,
          name: 'Engineering',
          description: 'Architecture',
          courseCount: '35+ Courses',
          iconClass: 'fas fa-drafting-compass',
          iconColor: '#06b6d4',
          iconBg: '#f0f9ff'
        }
      ]
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.categories.length / this.itemsPerSlide);
    },
    visibleCategories() {
      const start = this.currentSlide * this.itemsPerSlide;
      const end = start + this.itemsPerSlide;
      return this.categories.slice(start, end);
    }
  },
  methods: {
    handleCategoryClick(category) {
      this.$emit('category-selected', category);
    },
    nextSlide() {
      if (this.currentSlide < this.totalSlides - 1) {
        this.currentSlide++;
      }
    },
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
};
</script>

<style scoped>
/* Import Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

.category-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  background: #ffffff;
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  font-weight: 400;
}

/* Categories Grid */
.categories-wrapper {
  margin-bottom: 80px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  margin-bottom: 48px;
}

.category-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: #d1d5db;
}

.category-card:hover::before {
  opacity: 1;
}

.category-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  margin: 0 auto 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.category-card:hover .category-icon {
  transform: scale(1.1);
}

.category-icon i {
  font-size: 28px;
}

.category-info {
  position: relative;
  z-index: 1;
}

.category-name {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  line-height: 1.2;
}

.category-description {
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 16px 0;
  line-height: 1.3;
}

.course-count {
  font-size: 14px;
  color: #9ca3af;
  font-weight: 500;
}

/* Navigation Controls */
.navigation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.nav-arrow {
  width: 40px;
  height: 40px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #6b7280;
}

.nav-arrow:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #d1d5db;
  color: #374151;
}

.nav-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.dots-indicator {
  display: flex;
  gap: 8px;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e5e7eb;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dot.active {
  background: #6366f1;
  width: 24px;
  border-radius: 4px;
}

/* Thank You Section */
.thank-you-section {
  text-align: center;
  margin-bottom: 64px;
}

.thank-you-text {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}

/* Partner Brands */
.partner-brands {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
}

.brand-logo {
  opacity: 0.4;
  transition: opacity 0.3s ease;
}

.brand-logo:hover {
  opacity: 0.7;
}

.brand-text {
  font-size: 18px;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
}

.brand-text.amazon {
  font-family: 'Amazon Ember', Arial, sans-serif;
}

.brand-text.amd {
  font-weight: 700;
  letter-spacing: 2px;
}

.brand-text.cisco {
  font-weight: 600;
}

.brand-text.dropcom {
  font-weight: 500;
}

.brand-text.logitech {
  font-weight: 400;
}

.brand-text.spotify {
  font-weight: 700;
  color: #1db954;
  opacity: 1;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .partner-brands {
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .category-section {
    padding: 60px 20px;
  }
  
  .title {
    font-size: 32px;
  }
  
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .category-card {
    padding: 24px 20px;
  }
  
  .partner-brands {
    gap: 32px;
  }
  
  .brand-text {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .navigation-controls {
    gap: 16px;
  }
  
  .partner-brands {
    gap: 24px;
    justify-content: space-between;
  }
}
</style>