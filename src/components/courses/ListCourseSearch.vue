<template>
  <div class="search-results-section">
    <div class="search-container">
        <!-- Sidebar Filters -->
        <aside class="filters-sidebar">
          <div class="filter-section">
            <h3 class="filter-title">
              <i class="fas fa-filter"></i>
              Lọc Kết Quả
            </h3>
          </div>

          <div class="filter-section">
            <h4 class="filter-title">
              <i class="fas fa-layer-group"></i>
              Danh Mục
            </h4>
            <div class="filter-options">
              <label class="filter-option">
                <input type="checkbox" checked> Lập trình Web (45)
              </label>
              <label class="filter-option">
                <input type="checkbox"> Mobile Development (23)
              </label>
              <label class="filter-option">
                <input type="checkbox"> Data Science (18)
              </label>
              <label class="filter-option">
                <input type="checkbox"> Backend Development (32)
              </label>
              <label class="filter-option">
                <input type="checkbox"> Machine Learning (15)
              </label>
            </div>
          </div>

          <div class="filter-section">
            <h4 class="filter-title">
              <i class="fas fa-signal"></i>
              Cấp Độ
            </h4>
            <div class="filter-options">
              <label class="filter-option">
                <input type="checkbox"> Cơ Bản (28)
              </label>
              <label class="filter-option">
                <input type="checkbox" checked> Trung Bình (35)
              </label>
              <label class="filter-option">
                <input type="checkbox"> Nâng Cao (25)
              </label>
            </div>
          </div>

          <div class="filter-section">
            <h4 class="filter-title">
              <i class="fas fa-dollar-sign"></i>
              Giá
            </h4>
            <div class="price-range">
              
              <div class="filter-options">
                <label class="filter-option">
                  <input type="checkbox"> Miễn Phí (12)
                </label>
                <label class="filter-option">
                  <input type="checkbox"> Dưới 500k (25)
                </label>
                <label class="filter-option">
                  <input type="checkbox"> 500k - 1M (30)
                </label>
                <label class="filter-option">
                  <input type="checkbox"> Trên 1M (15)
                </label>
              </div>
            </div>
          </div>

          <div class="filter-section">
            <h4 class="filter-title">
              <i class="fas fa-star"></i>
              Đánh Giá
            </h4>
            <div class="rating-filter">
              <label class="rating-option">
                <input type="checkbox">
                <span class="stars">★★★★★</span>
                <span>5 sao (25)</span>
              </label>
              <label class="rating-option">
                <input type="checkbox">
                <span class="stars">★★★★☆</span>
                <span>4 sao trở lên (48)</span>
              </label>
              <label class="rating-option">
                <input type="checkbox">
                <span class="stars">★★★☆☆</span>
                <span>3 sao trở lên (67)</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="search-results-main">
          <!-- Search Results Header -->
          <div class="results-header">
            <div class="results-info">
              <h4>Kết quả tìm kiếm cho: "<span class="search-keyword">{{ query }}</span>"</h4>
              <p class="results-count">Tìm thấy <strong>{{ courses.length }}</strong> khóa học</p>
              
              <!-- Search Stats -->
              <div class="search-stats">
                <div class="stat-chip">
                  <i class="fas fa-graduation-cap"></i>
                  <span>{{ courses.length }} khóa học</span>
                </div>
                <div class="stat-chip">
                  <i class="fas fa-users"></i>
                  <span>{{ totalStudents }}+ học viên</span>
                </div>
                <div class="stat-chip">
                  <i class="fas fa-clock"></i>
                  <span>{{ totalHours }}+ giờ học</span>
                </div>
              </div>
            </div>
            <div class="sort-options">
              <div class="view-toggle">
                <button class="view-btn active" title="Dạng lưới">
                  <i class="fas fa-th-large"></i>
                </button>
                <button class="view-btn" title="Dạng danh sách">
                  <i class="fas fa-list"></i>
                </button>
              </div>
              <select class="sort-select">
                <option>Sắp xếp theo: Phù hợp nhất</option>
                <option>Mới nhất</option>
                <option>Đánh giá cao nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
                <option>Nhiều học viên nhất</option>
              </select>
            </div>
          </div>

          <!-- Course Grid -->
          <div class="courses-grid">
            <CourseItem 
              v-for="course in courses" 
              :key="course.id"
              :course="course"
            />
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <button class="page-btn">...</button>
            <button class="page-btn">10</button>
          </div>
        </main>
    </div>
  </div>
</template>

<script>
import CourseItem from './CourseItem.vue';

export default {
  name: "ListCourseSearch",
  components: {
    CourseItem
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Kiến Thức Nhập Môn IT",
          price: 0,
          is_free: true,
          thumbnail: require("@/assets/images/course1.png"),
          student_count: 136057,
          lesson_count: 9,
          duration: 192,
          category: "programming",
          badge: "HOT",
          rating: 5,
        },
        {
          id: 2,
          title: "Javascript Pro",
          price: 0,
          is_free: true,
          thumbnail: require("@/assets/images/course2.png"),
          student_count: 35999,
          lesson_count: 55,
          duration: 618,
          category: "frontend",
          badge: "",
          rating: 4.8,
        },
        {
          id: 3,
          title: "Responsive for everyone",
          price: 0,
          is_free: true,
          thumbnail: require("@/assets/images/course3.png"),
          student_count: 25000,
          lesson_count: 30,
          duration: 480,
          category: "backend",
          badge: "",
          rating: 4.5,
        },
        {
          id: 4,
          title: "Lập trình C++",
          price: 0,
          is_free: true,
          thumbnail: require("@/assets/images/course4.png"),
          student_count: 20000,
          lesson_count: 25,
          duration: 360,
          category: "backend",
          badge: "",
          rating: 4.7,
        },
        {
          id: 5,
          title: "Nodejs - Framework backend hiện đại",
          price: 0,
          is_free: true,
          thumbnail: require("@/assets/images/course1.png"),
          student_count: 50000,
          lesson_count: 40,
          duration: 720,
          category: "backend",
          badge: "NEW",
          rating: 4.9,
        },
        {
          id: 6,
          title: "Express - Framework backend phổ biến",
          price: 0,
          is_free: true,
          thumbnail: require("@/assets/images/course2.png"),
          student_count: 60000,
          lesson_count: 50,
          duration: 840,
          category: "backend",
          badge: "",
          rating: 4.8,
        }
      ]
    };
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  computed: {
    totalStudents() {
      return this.courses.reduce((total, course) => total + (course.student_count || 0), 0);
    },
    totalHours() {
      return Math.round(this.courses.reduce((total, course) => total + (course.duration || 0), 0) / 60);
    }
  }
};
</script>

<style scoped>
/* Main Container */
.search-results-section {
  padding: 120px 20px 40px; /* Thêm padding-top để tránh bị header che */
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
}

.search-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  align-items: flex-start; /* Đổi từ stretch về flex-start để sidebar không bị kéo dài */
}

/* Sidebar Filters */
.filters-sidebar {
  width: 300px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(127, 0, 255, 0.15);
  position: sticky;
  top: 100px; /* Giảm từ 120px xuống 100px để phù hợp với header */
  align-self: flex-start;
  max-height: calc(100vh - 140px); /* Tăng chiều cao lên */
  overflow-y: auto; /* Scroll riêng cho sidebar */
  scrollbar-width: none; /* Ẩn scrollbar cho Firefox */
  -ms-overflow-style: none; /* Ẩn scrollbar cho IE/Edge */
}

/* Ẩn scrollbar cho sidebar nhưng vẫn scroll được */
.filters-sidebar::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* Hiển thị scrollbar khi hover vào sidebar */
.filters-sidebar:hover {
  scrollbar-width: thin;
  scrollbar-color: rgba(127, 0, 255, 0.3) transparent;
}

.filters-sidebar:hover::-webkit-scrollbar {
  width: 6px;
}

.filters-sidebar:hover::-webkit-scrollbar-track {
  background: rgba(127, 0, 255, 0.1);
  border-radius: 3px;
}

.filters-sidebar:hover::-webkit-scrollbar-thumb {
  background: rgba(127, 0, 255, 0.3);
  border-radius: 3px;
  transition: background 0.3s ease;
}

.filters-sidebar:hover::-webkit-scrollbar-thumb:hover {
  background: rgba(127, 0, 255, 0.5);
}

.filter-section {
  margin-bottom: 30px;
}

.filter-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
}

.filter-title i {
  color: rgba(127, 0, 255, 1);
  font-size: 1.1rem;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  padding: 8px 12px;
}

.filter-option:hover {
  color: rgba(127, 0, 255, 1);
  background: rgba(127, 0, 255, 0.05);
}

.filter-option input[type="checkbox"] {
  accent-color: rgba(127, 0, 255, 1);
  transform: scale(1.1);
}

.price-range {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.price-inputs {
  display: flex;
  gap: 10px;
  align-items: center;
}

.price-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
}

.rating-filter {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rating-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.rating-option:hover {
  background: rgba(127, 0, 255, 0.05);
}

.stars {
  color: #ffc107;
}

/* Main Content Area */
.search-results-main {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(127, 0, 255, 0.15);
  display: flex;
  flex-direction: column;
  /* Loại bỏ max-height và overflow để hiển thị hết nội dung */
}

/* Results Header */
.results-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 2px solid rgba(127, 0, 255, 0.1);
  gap: 20px;
}

.results-info {
  flex: 1;
}

.results-info h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2;
}

.search-keyword {
  color: rgba(127, 0, 255, 1);
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 800;
}

.results-count {
  color: #666;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 15px;
}

.results-count strong {
  color: rgba(127, 0, 255, 1);
  font-weight: 700;
}

/* Search Stats */
.search-stats {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stat-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(225, 0, 255, 0.1) 100%);
  border: 1px solid rgba(127, 0, 255, 0.2);
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(127, 0, 255, 0.8);
  font-family: 'Roboto', sans-serif;
}

.stat-chip i {
  font-size: 0.8rem;
}

.sort-options {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
}

/* View Toggle */
.view-toggle {
  display: flex;
  background: rgba(127, 0, 255, 0.1);
  border-radius: 10px;
  padding: 2px;
}

.view-btn {
  padding: 8px 12px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: rgba(127, 0, 255, 0.7);
  transition: all 0.3s ease;
  font-size: 14px;
}

.view-btn.active {
  background: rgba(127, 0, 255, 1);
  color: white;
  box-shadow: 0 2px 8px rgba(127, 0, 255, 0.3);
}

.view-btn:hover:not(.active) {
  background: rgba(127, 0, 255, 0.15);
}

.sort-select {
  padding: 12px 16px;
  border: 2px solid rgba(127, 0, 255, 0.2);
  border-radius: 12px;
  background: white;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
}

.sort-select:hover {
  border-color: rgba(127, 0, 255, 0.4);
}

.sort-select:focus {
  outline: none;
  border-color: rgba(127, 0, 255, 0.6);
  box-shadow: 0 0 0 3px rgba(127, 0, 255, 0.1);
}

/* Course Grid */
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 40px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
}

.page-btn {
  padding: 10px 15px;
  border: 2px solid rgba(127, 0, 255, 0.2);
  background: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #333;
  transition: all 0.3s ease;
}

.page-btn:hover {
  background: rgba(127, 0, 255, 0.1);
  border-color: rgba(127, 0, 255, 0.3);
}

.page-btn.active {
  background: linear-gradient(135deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(127, 0, 255, 0.3);
}

/* Responsive */
@media (max-width: 1200px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .search-container {
    flex-direction: column;
  }
  
  .filters-sidebar {
    width: 100%;
    position: static;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
  }
  
  .results-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
}
</style>
