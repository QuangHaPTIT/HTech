<template>
  <main class="main-content">
    <!-- Breadcrumb -->
    <div class="breadcrumb">
      <div class="container">
        <a href="/">Trang chủ</a>
        <span>/</span>
        <a href="/courses">Khóa học</a>
        <span>/</span>
        <span>Combo 5 Khóa Lập Trình Frontend Mới Nhất Cùng EvonDev</span>
      </div>
    </div>

    <!-- Course Detail Section -->
    <section class="course-detail">
      <div class="container">
        <div class="course-content">
          <!-- Left Content -->
          <div class="course-info">
            <h1 class="course-title">
              Combo 5 Khóa Lập trình Frontend Mới Nhất cùng EvonDev
            </h1>

            <div class="course-meta">
              <div class="instructor">
                <img src="../../assets/images/logo-evondev.png" alt="Evondev" class="instructor-avatar">
                <div>
                  <div class="instructor-name">Evondev</div>
                  <div class="instructor-title">Senior Frontend Developer</div>
                </div>
              </div>
              <div class="course-stats">
                <div class="stat-item">
                  <i class="fas fa-users"></i>
                  <span>2,847 học viên</span>
                </div>
                <div class="stat-item">
                  <i class="fas fa-clock"></i>
                  <span>45+ giờ học</span>
                </div>
                <div class="stat-item">
                  <i class="fas fa-video"></i>
                  <span>180+ bài giảng</span>
                </div>
                <div class="stat-item">
                  <i class="fas fa-certificate"></i>
                  <span>Chứng chỉ hoàn thành</span>
                </div>
              </div>
            </div>

            <div class="course-actions">
              <button class="preview-btn">
                <i class="fas fa-play"></i>
                Học thử miễn phí
              </button>
              <button class="wishlist-btn">
                <i class="far fa-heart"></i>
                Yêu thích
              </button>
            </div>

            <div class="course-description">
              <p>
                Combo 5 Khóa Học Lập Trình Front End cùng Evondev giúp bạn xây dựng nền tảng vững chắc trong lập trình web, từ cơ bản đến nâng cao. 
                Các khóa học được thiết kế chi tiết, hướng dẫn qua các dự án thực tế, giúp bạn nâng cao kỹ năng và tự tin trong công việc. 
                Với hơn 45 giờ học và 180+ bài giảng, bạn sẽ thành thạo từ JavaScript, TypeScript, React.js, Next.js đến Tailwind CSS.
              </p>
            </div>

            <!-- Course Tabs -->
            <div class="course-tabs">
              <div class="tab-buttons">
                <button class="tab-btn active" @click="activeTab = 'overview'">
                  Tổng quan
                </button>
                <button class="tab-btn" @click="activeTab = 'content'">
                  Nội dung khóa học
                </button>
                <button class="tab-btn" @click="activeTab = 'reviews'">
                  Đánh giá (245)
                </button>
                <button class="tab-btn" @click="activeTab = 'instructor'">
                  Giảng viên
                </button>
              </div>

              <!-- Tab Contents -->
              <div class="tab-content" v-show="activeTab === 'overview'">
                <div class="course-overview">
                  <h3>Bạn sẽ học được gì</h3>
                  <div class="learning-outcomes">
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Học TypeScript từ cơ bản đến nâng cao, bao gồm Type Annotations, Interfaces, Generics, Advanced Types</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Hiểu cách sử dụng TypeScript trong các dự án thực tế với React và Next.js</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Học Next.js từ cơ bản đến nâng cao: SSR, SSG, API Routes, App Router</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Xây dựng hệ thống E-Learning hoàn chỉnh với Next.js, quản lý người dùng, khóa học, thanh toán</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Thành thạo React.js: Hooks, Context API, Redux Toolkit, React Query</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>JavaScript ES6+: Arrow Functions, Destructuring, Async/Await, Modules</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Tailwind CSS: Responsive Design, Custom Components, Dark Mode</span>
                    </div>
                    <div class="outcome-item">
                      <i class="fas fa-check-circle"></i>
                      <span>Deploy ứng dụng lên Vercel, Netlify, và các hosting khác</span>
                    </div>
                  </div>

                  <h3>Yêu cầu khóa học</h3>
                  <div class="requirements">
                    <div class="requirement-item">
                      <i class="fas fa-dot-circle"></i>
                      <span>Hiểu biết cơ bản về HTML và CSS</span>
                    </div>
                    <div class="requirement-item">
                      <i class="fas fa-dot-circle"></i>
                      <span>Có kiến thức cơ bản về JavaScript (sẽ được ôn lại trong khóa học)</span>
                    </div>
                    <div class="requirement-item">
                      <i class="fas fa-dot-circle"></i>
                      <span>Máy tính có kết nối internet ổn định</span>
                    </div>
                    <div class="requirement-item">
                      <i class="fas fa-dot-circle"></i>
                      <span>Tinh thần học hỏi và thực hành nhiều</span>
                    </div>
                  </div>

                  <h3>Khóa học này dành cho ai</h3>
                  <div class="target-audience">
                    <div class="audience-item">
                      <i class="fas fa-user-graduate"></i>
                      <span>Sinh viên IT muốn học lập trình web Frontend</span>
                    </div>
                    <div class="audience-item">
                      <i class="fas fa-code"></i>
                      <span>Lập trình viên muốn nâng cao kỹ năng Frontend hiện đại</span>
                    </div>
                    <div class="audience-item">
                      <i class="fas fa-rocket"></i>
                      <span>Người muốn chuyển đổi nghề nghiệp sang IT</span>
                    </div>
                    <div class="audience-item">
                      <i class="fas fa-briefcase"></i>
                      <span>Freelancer muốn mở rộng kỹ năng để nhận thêm dự án</span>
                    </div>
                    <div class="audience-item">
                      <i class="fas fa-laptop-code"></i>
                      <span>Backend Developer muốn học Frontend để trở thành Fullstack</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-content" v-show="activeTab === 'content'">
                <div class="course-curriculum">
                  <h3>Nội dung khóa học</h3>
                  <div class="curriculum-summary">
                    <div class="summary-item">
                      <i class="fas fa-layer-group"></i>
                      <span>5 khóa học</span>
                    </div>
                    <div class="summary-item">
                      <i class="fas fa-video"></i>
                      <span>180+ bài giảng</span>
                    </div>
                    <div class="summary-item">
                      <i class="fas fa-clock"></i>
                      <span>45+ giờ học</span>
                    </div>
                  </div>

                  <div class="curriculum-list">
                    <div class="curriculum-item" v-for="(course, index) in courses" :key="index">
                      <div class="curriculum-header" @click="toggleCourse(index)">
                        <div class="course-info">
                          <h4>{{ course.title }}</h4>
                          <div class="course-meta">
                            <span>{{ course.lessons }} bài học</span>
                            <span>{{ course.duration }} giờ</span>
                          </div>
                        </div>
                        <i class="fas fa-chevron-down" :class="{ 'rotated': course.expanded }"></i>
                      </div>
                      
                      <div class="curriculum-content" v-show="course.expanded">
                        <div class="lesson-item" v-for="(lesson, lessonIndex) in course.lessons_list" :key="lessonIndex">
                          <div class="lesson-info">
                            <i class="fas fa-play-circle"></i>
                            <span>{{ lesson.title }}</span>
                          </div>
                          <div class="lesson-meta">
                            <span class="lesson-duration">{{ lesson.duration }}</span>
                            <span class="lesson-type" v-if="lesson.type === 'preview'">Xem trước</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button v-if="!showAllCourses && courses.length > 5" class="view-more" @click="showAllCourses = true">
                    Xem thêm nội dung khóa học
                  </button>
                </div>
              </div>

              <div class="tab-content" v-show="activeTab === 'reviews'">
                <div class="course-reviews">
                  <h3>Đánh giá từ học viên</h3>
                  <div class="reviews-summary">
                    <div class="rating-overview">
                      <div class="rating-score">4.8</div>
                      <div class="rating-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="rating-text">Xuất sắc</div>
                      <div class="total-reviews">245 đánh giá</div>
                    </div>
                    
                    <div class="rating-breakdown">
                      <div class="rating-bar" v-for="star in [5,4,3,2,1]" :key="star">
                        <span class="star-label">{{ star }} sao</span>
                        <div class="bar-container">
                          <div class="bar-fill" :style="{ width: getRatingPercentage(star) + '%' }"></div>
                        </div>
                        <span class="bar-percentage">{{ getRatingPercentage(star) }}%</span>
                      </div>
                    </div>
                  </div>

                  <div class="reviews-list">
                    <div class="review-item" v-for="(review, index) in reviews" :key="index">
                      <div class="review-header">
                        <div class="reviewer-info">
                          <img :src="review.avatar" :alt="review.name" class="reviewer-avatar">
                          <div>
                            <div class="reviewer-name">{{ review.name }}</div>
                            <div class="review-date">{{ review.date }}</div>
                          </div>
                        </div>
                        <div class="review-rating">
                          <i v-for="i in 5" :key="i" class="fas fa-star" 
                             :class="{ 'filled': i <= review.rating }"></i>
                        </div>
                      </div>
                      <div class="review-content">
                        <p>{{ review.content }}</p>
                      </div>
                    </div>
                  </div>

                  <button class="load-more-reviews">Xem thêm đánh giá</button>
                </div>
              </div>

              <div class="tab-content" v-show="activeTab === 'instructor'">
                <div class="instructor-info">
                  <div class="instructor-profile">
                    <img src="../../assets/images/logo-evondev.png" alt="Evondev" class="instructor-large-avatar">
                    <div class="instructor-details">
                      <h3>Evondev</h3>
                      <p class="instructor-title">Senior Frontend Developer</p>
                      <div class="instructor-stats">
                        <div class="stat">
                          <i class="fas fa-star"></i>
                          <span>4.9 Đánh giá</span>
                        </div>
                        <div class="stat">
                          <i class="fas fa-users"></i>
                          <span>15,000+ Học viên</span>
                        </div>
                        <div class="stat">
                          <i class="fas fa-play-circle"></i>
                          <span>25 Khóa học</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="instructor-bio">
                    <h4>Về giảng viên</h4>
                    <p>
                      Evondev là một Senior Frontend Developer với hơn 7 năm kinh nghiệm trong ngành phát triển web. 
                      Anh đã làm việc tại nhiều công ty công nghệ hàng đầu và có kinh nghiệm phát triển các ứng dụng web 
                      quy mô lớn phục vụ hàng triệu người dùng.
                    </p>
                    <p>
                      Với đam mê chia sẻ kiến thức, Evondev đã tạo ra hơn 25 khóa học chất lượng cao, giúp hơn 15,000 
                      học viên thành công trong sự nghiệp lập trình. Các khóa học của anh luôn được cập nhật với những 
                      công nghệ và xu hướng mới nhất trong ngành.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar -->
          <div class="course-sidebar">
            <div class="course-card">
              <div class="course-video">
                <div class="video-thumbnail">
                  <div class="play-button">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="course-badge">Frontend Developer Combo</div>
                </div>
              </div>

              <div class="pricing">
                <div class="discount-badge">Giảm 98%</div>
                <div class="current-price">129.000 VNĐ</div>
                <div class="original-price">6.990.000 VNĐ</div>
                <div class="price-note">Ưu đãi có hạn đến 31/12/2024</div>
              </div>

              <div class="purchase-actions">
                <button class="add-to-cart-btn">
                  <i class="fas fa-shopping-cart"></i>
                  Thêm vào giỏ hàng
                </button>
                <button class="buy-now-btn">
                  <i class="fas fa-bolt"></i>
                  Mua ngay
                </button>
              </div>

              <div class="course-features">
                <div class="feature-item">
                  <i class="fas fa-book"></i>
                  <span>Đầy Đủ Bài Giảng</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-globe"></i>
                  <span>Học Online Tiện Lợi</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-clock"></i>
                  <span>Kích Hoạt Nhanh 2-5 Phút</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-download"></i>
                  <span>Được phép tải xuống</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-mobile-alt"></i>
                  <span>Hỗ trợ Mobile App</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-infinity"></i>
                  <span>Truy cập trọn đời</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-certificate"></i>
                  <span>Chứng chỉ hoàn thành</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-headset"></i>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>

              <div class="guarantee">
                <i class="fas fa-shield-alt"></i>
                <div>
                  <div class="guarantee-title">Đảm bảo hoàn tiền 100%</div>
                  <div class="guarantee-text">Trong vòng 30 ngày đầu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import courseService from "@/services/courseService";

export default {
    name: "MainCourseDetail",
    data() {
        return {
            loading: false,
            activeTab: 'overview',
            showAllCourses: false,
            courses: [
                {
                    title: "Khóa học 01: TypeScript cơ bản dành cho người mới",
                    lessons: 35,
                    duration: "8.5",
                    expanded: false,
                    lessons_list: [
                        { title: "Giới thiệu về TypeScript", duration: "15:30", type: "preview" },
                        { title: "Cài đặt TypeScript và môi trường", duration: "12:45" },
                        { title: "Type Annotations cơ bản", duration: "18:20" },
                        { title: "Interfaces và Object Types", duration: "22:10" },
                        { title: "Generics trong TypeScript", duration: "25:15" }
                    ]
                },
                {
                    title: "Khóa học 02: Next.JS Pro – Xây dựng E Learning System hoàn chỉnh",
                    lessons: 42,
                    duration: "12.5",
                    expanded: false,
                    lessons_list: [
                        { title: "Giới thiệu Next.js 13 và App Router", duration: "20:15", type: "preview" },
                        { title: "Server Components vs Client Components", duration: "18:30" },
                        { title: "Routing và Navigation", duration: "16:45" },
                        { title: "API Routes và Server Actions", duration: "24:20" },
                        { title: "Xây dựng hệ thống Authentication", duration: "32:10" }
                    ]
                },
                {
                    title: "Khóa học 03: React.JS cơ bản đến nâng cao",
                    lessons: 38,
                    duration: "10.5",
                    expanded: false,
                    lessons_list: [
                        { title: "Giới thiệu về React và JSX", duration: "16:20", type: "preview" },
                        { title: "Components và Props", duration: "19:15" },
                        { title: "State và Lifecycle", duration: "21:30" },
                        { title: "Hooks: useState, useEffect", duration: "25:45" },
                        { title: "Context API và useReducer", duration: "28:10" }
                    ]
                },
                {
                    title: "Khóa học 04: JavaScript từ cơ bản đến nâng cao từ thành viên của Google",
                    lessons: 45,
                    duration: "11.0",
                    expanded: false,
                    lessons_list: [
                        { title: "ES6+ Features: Let, Const, Arrow Functions", duration: "17:30", type: "preview" },
                        { title: "Destructuring và Spread Operator", duration: "14:20" },
                        { title: "Promises và Async/Await", duration: "23:45" },
                        { title: "Modules và Import/Export", duration: "19:15" },
                        { title: "DOM Manipulation và Events", duration: "26:30" }
                    ]
                },
                {
                    title: "Khóa học 05: Tailwind CSS từ cơ bản đến nâng cao",
                    lessons: 28,
                    duration: "7.5",
                    expanded: false,
                    lessons_list: [
                        { title: "Giới thiệu Tailwind CSS", duration: "12:15", type: "preview" },
                        { title: "Utility Classes cơ bản", duration: "15:30" },
                        { title: "Responsive Design với Tailwind", duration: "18:45" },
                        { title: "Custom Components và @apply", duration: "20:20" },
                        { title: "Dark Mode và Theming", duration: "16:40" }
                    ]
                },
                {
                    title: "Khóa học 06: Git và GitHub cho lập trình viên",
                    lessons: 20,
                    duration: "4.5",
                    expanded: false,
                    lessons_list: [
                        { title: "Giới thiệu về Git", duration: "10:30", type: "preview" },
                        { title: "Git Commands cơ bản", duration: "15:20" },
                        { title: "Branching và Merging", duration: "18:15" },
                        { title: "GitHub và Remote Repositories", duration: "16:45" },
                        { title: "Git Flow và Best Practices", duration: "14:30" }
                    ]
                },
                {
                    title: "Khóa học 07: Deploy và DevOps cơ bản",
                    lessons: 15,
                    duration: "3.5",
                    expanded: false,
                    lessons_list: [
                        { title: "Deploy lên Vercel", duration: "12:30" },
                        { title: "Deploy lên Netlify", duration: "11:45" },
                        { title: "Docker cơ bản", duration: "20:15" },
                        { title: "CI/CD với GitHub Actions", duration: "18:20" },
                        { title: "Monitoring và Performance", duration: "15:40" }
                    ]
                }
            ],
            reviews: [
                {
                    name: "Nguyễn Văn An",
                    avatar: "/avatar1.jpg",
                    rating: 5,
                    date: "2 tuần trước",
                    content: "Khóa học rất chi tiết và dễ hiểu. Evondev giải thích rất rõ ràng, từ cơ bản đến nâng cao. Sau khi học xong tôi đã có thể làm được nhiều dự án thực tế. Highly recommended!"
                },
                {
                    name: "Trần Thị Bình",
                    avatar: "/avatar2.jpg", 
                    rating: 5,
                    date: "1 tháng trước",
                    content: "Combo này quá tuyệt vời! Từ TypeScript đến React, Next.js đều được giảng dạy rất kỹ lưỡng. Tôi đã chuyển nghề thành công nhờ những kiến thức học được ở đây."
                },
                {
                    name: "Lê Minh Cường",
                    avatar: "/avatar3.jpg",
                    rating: 4,
                    date: "3 tuần trước", 
                    content: "Nội dung khóa học phong phú, cập nhật theo xu hướng mới. Dự án thực hành E-Learning rất hay. Chỉ mong có thêm bài tập thực hành nữa thì tuyệt vời."
                },
                {
                    name: "Phạm Thu Hà",
                    avatar: "/avatar4.jpg",
                    rating: 5,
                    date: "1 tuần trước",
                    content: "Giá cả rất hợp lý cho 5 khóa học chất lượng như vậy. Tôi đã học được rất nhiều, từ junior lên được mid-level developer. Cảm ơn thầy Evondev rất nhiều!"
                },
                {
                    name: "Hoàng Đức Thành",
                    avatar: "/avatar5.jpg", 
                    rating: 5,
                    date: "5 ngày trước",
                    content: "Khóa học Next.js đặc biệt ấn tượng. Việc xây dựng hệ thống E-Learning từ đầu đến cuối giúp tôi hiểu rõ flow của một dự án thực tế. Recommend 100%!"
                }
            ]
        };
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        courseId() {
            return this.id || this.$route.params.id;
        },
        visibleCourses() {
            return this.showAllCourses ? this.courses : this.courses.slice(0, 5);
        }
    },
    methods: {
        toggleCourse(index) {
            const courseIndex = this.showAllCourses ? index : Math.min(index, 4);
            this.courses[courseIndex].expanded = !this.courses[courseIndex].expanded;
        },
        getRatingPercentage(star) {
            const ratings = { 5: 78, 4: 15, 3: 5, 2: 1, 1: 1 };
            return ratings[star] || 0;
        }
    }
}
</script>

<style scoped>
/* Main Content */
.main-content {
  margin-top: 100px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  min-height: calc(100vh - 100px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumb {
  background: rgba(127, 0, 255, 0.05);
  padding: 15px 0;
  border-bottom: 1px solid rgba(127, 0, 255, 0.1);
}

.breadcrumb a {
  color: #7f00ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb a:hover {
  color: #5a00cc;
}

.breadcrumb span {
  margin: 0 10px;
  color: #666;
}

.course-detail {
  padding: 40px 0;
}

.course-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

@media (max-width: 768px) {
  .course-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.course-title {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 25px;
  line-height: 1.2;
  font-weight: 700;
}

.course-meta {
  margin-bottom: 25px;
}

.instructor {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.instructor-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #7f00ff;
}

.instructor-name {
  font-weight: 600;
  color: #333;
}

.instructor-title {
  color: #666;
  font-size: 0.9rem;
}

.course-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 0.9rem;
}

.stat-item i {
  color: #7f00ff;
}

.course-actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.preview-btn,
.wishlist-btn {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.wishlist-btn {
  background: transparent;
  color: #7f00ff;
  border: 2px solid #7f00ff;
}

.preview-btn:hover,
.wishlist-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.4);
}

.wishlist-btn:hover {
  background: rgba(127, 0, 255, 0.1);
}

.course-description {
  background: rgba(127, 0, 255, 0.05);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 40px;
  border-left: 4px solid #7f00ff;
  line-height: 1.6;
}

.course-tabs {
  margin-top: 40px;
}

.tab-buttons {
  display: flex;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.tab-btn {
  background: none;
  border: none;
  padding: 15px 25px;
  font-size: 1.1rem;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
}

.tab-btn.active,
.tab-btn:hover {
  color: #7f00ff;
  border-bottom-color: #7f00ff;
}

.tab-content {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.course-overview h3 {
  color: #333;
  font-size: 1.5rem;
  margin: 30px 0 20px 0;
  font-weight: 600;
}

.learning-outcomes,
.target-audience,
.requirements {
  margin: 20px 0;
}

.outcome-item,
.audience-item,
.requirement-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 12px;
  padding: 15px;
  background: rgba(127, 0, 255, 0.02);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.outcome-item:hover,
.audience-item:hover,
.requirement-item:hover {
  background: rgba(127, 0, 255, 0.05);
  transform: translateX(5px);
}

.outcome-item i,
.audience-item i,
.requirement-item i {
  color: #7f00ff;
  margin-top: 2px;
  font-size: 1.1rem;
  min-width: 20px;
}

.curriculum-summary {
  display: flex;
  gap: 30px;
  margin: 20px 0 30px 0;
  padding: 20px;
  background: rgba(127, 0, 255, 0.05);
  border-radius: 15px;
  flex-wrap: wrap;
}

.summary-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  font-weight: 600;
}

.summary-item i {
  color: #7f00ff;
  font-size: 1.2rem;
}

.curriculum-list {
  margin-bottom: 30px;
}

.curriculum-item {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.curriculum-item:hover {
  border-color: #7f00ff;
  box-shadow: 0 5px 15px rgba(127, 0, 255, 0.1);
}

.curriculum-header {
  padding: 20px 25px;
  cursor: pointer;
  display: flex;
  justify-content: between;
  align-items: center;
  background: rgba(127, 0, 255, 0.02);
  transition: all 0.3s ease;
}

.curriculum-header:hover {
  background: rgba(127, 0, 255, 0.05);
}

.curriculum-header h4 {
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.course-meta {
  display: flex;
  gap: 20px;
  color: #666;
  font-size: 0.9rem;
}

.curriculum-header i {
  color: #7f00ff;
  transition: transform 0.3s ease;
}

.curriculum-header i.rotated {
  transform: rotate(180deg);
}

.curriculum-content {
  border-top: 1px solid #e0e0e0;
  background: white;
}

.lesson-item {
  display: flex;
  justify-content: between;
  align-items: center;
  padding: 15px 25px;
  border-bottom: 1px solid rgba(224, 224, 224, 0.5);
  transition: all 0.3s ease;
}

.lesson-item:hover {
  background: rgba(127, 0, 255, 0.02);
}

.lesson-item:last-child {
  border-bottom: none;
}

.lesson-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.lesson-info i {
  color: #7f00ff;
}

.lesson-meta {
  display: flex;
  align-items: center;
  gap: 15px;
}

.lesson-duration {
  color: #666;
  font-size: 0.9rem;
}

.lesson-type {
  background: #7f00ff;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.view-more {
  background: transparent;
  color: #7f00ff;
  border: 2px solid #7f00ff;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.view-more:hover {
  background: #7f00ff;
  color: white;
  transform: translateY(-2px);
}

.reviews-summary {
  display: flex;
  gap: 40px;
  background: rgba(127, 0, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.rating-overview {
  text-align: center;
  min-width: 200px;
}

.rating-score {
  font-size: 3rem;
  font-weight: 700;
  color: #7f00ff;
  margin-bottom: 10px;
}

.rating-stars {
  margin-bottom: 10px;
}

.rating-stars i {
  color: #ffa500;
  font-size: 1.5rem;
  margin: 0 2px;
}

.rating-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.total-reviews {
  color: #666;
}

.rating-breakdown {
  flex: 1;
  min-width: 300px;
}

.rating-bar {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
}

.star-label {
  width: 50px;
  font-size: 0.9rem;
  color: #666;
}

.bar-container {
  flex: 1;
  height: 8px;
  background: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #7f00ff, #e100ff);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.bar-percentage {
  width: 40px;
  text-align: right;
  font-size: 0.9rem;
  color: #666;
}

.reviews-list {
  margin-bottom: 30px;
}

.review-item {
  background: white;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.review-item:hover {
  border-color: #7f00ff;
  box-shadow: 0 5px 15px rgba(127, 0, 255, 0.1);
}

.review-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 15px;
}

.reviewer-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.reviewer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.reviewer-name {
  font-weight: 600;
  color: #333;
}

.review-date {
  color: #666;
  font-size: 0.9rem;
}

.review-rating i {
  color: #e0e0e0;
  margin: 0 2px;
}

.review-rating i.filled {
  color: #ffa500;
}

.review-content p {
  line-height: 1.6;
  color: #555;
  margin: 0;
}

.load-more-reviews {
  background: transparent;
  color: #7f00ff;
  border: 2px solid #7f00ff;
  padding: 12px 30px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.load-more-reviews:hover {
  background: #7f00ff;
  color: white;
}

.instructor-profile {
  display: flex;
  gap: 25px;
  margin-bottom: 30px;
  align-items: center;
}

.instructor-large-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #7f00ff;
}

.instructor-details h3 {
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.instructor-details .instructor-title {
  color: #7f00ff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.instructor-stats {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
}

.stat i {
  color: #7f00ff;
}

.instructor-bio h4 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.instructor-bio p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
}

/* Course Sidebar */
.course-card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 120px;
}

.video-thumbnail {
  background: linear-gradient(135deg, rgba(127, 0, 255, 0.8) 0%, rgba(225, 0, 255, 0.8) 100%);
  height: 200px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
}

.play-button {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f00ff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  background: white;
}

.course-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.pricing {
  text-align: center;
  margin-bottom: 25px;
  position: relative;
}

.discount-badge {
  background: #ff4444;
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  position: absolute;
  top: -10px;
  right: 20px;
  transform: rotate(15deg);
}

.current-price {
  font-size: 2.2rem;
  font-weight: 700;
  color: #7f00ff;
  margin-bottom: 5px;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.price-note {
  color: #ff4444;
  font-size: 0.9rem;
  font-weight: 500;
  background: rgba(255, 68, 68, 0.1);
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 10px;
}

.purchase-actions {
  margin-bottom: 25px;
}

.add-to-cart-btn,
.buy-now-btn {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.add-to-cart-btn {
  background: transparent;
  color: #7f00ff;
  border: 2px solid #7f00ff;
}

.add-to-cart-btn:hover {
  background: rgba(127, 0, 255, 0.1);
  transform: translateY(-2px);
}

.buy-now-btn {
  background: linear-gradient(90deg, rgba(127, 0, 255, 1) 0%, rgba(225, 0, 255, 1) 100%);
  color: white;
}

.buy-now-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(127, 0, 255, 0.4);
}

.course-features {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
  margin-bottom: 25px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding: 8px 0;
}

.feature-item i {
  color: #7f00ff;
  width: 20px;
  font-size: 1.1rem;
}

.guarantee {
  background: rgba(127, 0, 255, 0.05);
  padding: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid rgba(127, 0, 255, 0.2);
}

.guarantee i {
  color: #7f00ff;
  font-size: 2rem;
}

.guarantee-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.guarantee-text {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .course-title {
    font-size: 1.8rem;
  }
  
  .tab-buttons {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .tab-buttons::-webkit-scrollbar {
    display: none;
  }
  
  .reviews-summary {
    flex-direction: column;
    gap: 20px;
  }
  
  .instructor-profile {
    flex-direction: column;
    text-align: center;
  }
  
  .course-stats {
    justify-content: center;
  }
  
  .curriculum-summary {
    flex-direction: column;
    gap: 15px;
  }
}
</style>



