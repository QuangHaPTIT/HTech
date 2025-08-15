<template>
  <div class="course-card" @click="handleToCourse">
    <div class="course-image" :class="getImageClass">
      <div v-if="course.badge" class="course-badge">{{ course.badge }}</div>
      <img 
        :src="course.thumbnail || defaultImage" 
        :alt="course.title"
        @error="handleImageError"
      />
    </div>
    <div class="course-content">
      <h3 class="course-title">{{ course.title }}</h3>
      <div class="course-price">
        <span v-if="course.is_free || course.price === 0">Miễn phí</span>
        <span v-else>{{ formatPrice(course.price) }}</span>
      </div>
      <div class="course-stats">
        <div class="stat-item">
          <i class="fas fa-users stat-icon"></i>
          <span>{{ formatNumber(course.student_count || 0) }}</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-play-circle stat-icon"></i>
          <span>{{ course.lesson_count || 0 }}</span>
        </div>
        <div class="stat-item">
          <i class="fas fa-clock stat-icon"></i>
          <span>{{ formatDuration(course.duration || 0) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  data() {
    return {
        defaultImage: require('../../assets/images/course1.png'),
    }
  },    
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    },
    formatNumber(num) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return Math.floor(num / 1000) + 'K';
      }
      return num.toString();
    },
    formatDuration(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return hours > 0 ? `${hours}h${mins}p` : `${mins}p`;
    },
    handleImageError(event) {
      event.target.src = this.defaultImage;
    },
    handleToCourse() {
      // Lưu vị trí scroll hiện tại trước khi navigate
      
      this.$router.push(`/courses/${this.course.id}`);
    },
  },
  computed: {
    getImageClass() {
      const classMap = {
        'programming': '',
        'frontend': 'alt-1',
        'backend': 'alt-2',
        'fullstack': 'alt-3',
        'ai': '',
        'engineering': 'alt-1'
      };
      return classMap[this.course.category] || '';
    }
  }
  
};
</script>

<style scoped>
    .course-card {
  background: white;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 280px;
  display: flex;
  flex-direction: column;
}
.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  border-color: rgba(127, 0, 255, 0.1);
}
.course-image {
  height: 160px;
  background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
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
  padding: 12px;
  background: white;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 6px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.course-price {
  color: #ff6b35;
  font-size: 0.85rem;
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
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid #f0f0f0;
}
.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  color: #666;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  flex: 1;
  justify-content: center;
}
.stat-icon {
  color: #999 !important;
  font-size: 0.75rem;
  width: 10px;
  text-align: center;
}
</style>
