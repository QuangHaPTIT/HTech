<template>
  <section class="courses" id="courses">
    <div class="courses-container">
      <course-section-title />

      <div class="courses-grid">
        <course-item
          v-for="course in courses"
          :key="course.id"
          :course="course"
        />

       
      </div>
    </div>
  </section>
</template>

<script>
import { courseService } from "@/services/courseService";
import CourseItem from "../courses/CourseItem.vue";
import CourseSectionTitle from "../courses/CourseSectionTitle.vue";

export default {
  name: "TheCoursesSection",
  components: {
    CourseItem,
    CourseSectionTitle
  },
  async mounted() {
    await this.fetchCourses();
  },
  data() {
    return {
      courses: [],
      loading: true,
      error: null,
      totalCourses: 0,
    };
  },
  methods: {
    async fetchCourses() {
      try {
        this.isLoading = true;
        this.error = null;

        const response = await courseService.getCourses();
        this.courses = response.data.courses;
        this.totalCourses = response.data.total;
      } catch (error) {
        this.error = "Không thể tải khóa học. Vui lòng thử lại sau.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.courses {
  padding: 80px 0;
  background: #ffffff;
}
.courses-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  text-align: center;
  margin-bottom: 20px;
}
.section-title h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-bottom: 15px;
}
.section-subtitle {
  color: #666;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 50px;
}
.courses-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* luôn 4 cột */
  gap: 30px;
}
.course-card {
  background: white;
  border-radius: 20px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.course-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(127, 0, 255, 0.1);
}
.course-image {
  height: 200px;
  background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px 15px 0 0;
}
.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
}
.course-image.alt-1 {
  background: linear-gradient(135deg, #ff9500 0%, #ff6b00 100%);
}
.course-image.alt-2 {
  background: linear-gradient(135deg, #e91e63 0%, #c2185b 100%);
}
.course-image.alt-3 {
  background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%);
}
.course-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  backdrop-filter: blur(10px);
}
.course-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 30px 20px 20px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.course-content {
  padding: 20px;
  background: white;
  display: flex;
  flex-direction: column;
  height: 180px;
}
.course-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 0.9rem;
}
.course-rating span:nth-child(2) {
  font-weight: 600;
  color: #333;
}
.course-rating span:nth-child(3) {
  color: #999;
  font-size: 0.85rem;
}
.stars {
  color: #ffc107;
  font-size: 0.9rem;
}
.course-title {
  color: #2c3e50;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-price {
  color: #ff6b35;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.course-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 15px;
  border-top: 1px solid #f0f0f0;
  min-height: 35px;
}
.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: #666;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  flex: 1;
  justify-content: center;
}
.stat-icon {
  font-size: 0.9rem;
  color: #999;
  width: 12px;
  text-align: center;
}
</style>
