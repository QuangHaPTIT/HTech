// import apiClient from "./api";
export const courseService = {


    // async getCourses(params = {}) {
    //     try {
    //         const response = await apiClient.get('/courses', { params })
    //         return response.data
    //     } catch (error) {
    //         console.error("Error fetching courses:", error);
    //         throw error;
    //     }
    // },

    // // Lấy khóa học phổ biến
    // async getPopularCourses(limit = 4) {
    //     try {
    //         const response = await apiClient.get('/courses/popular', { 
    //             params: { limit } 
    //         })
    //         return response.data
    //     } catch (error) {
    //         console.error("Error fetching popular courses:", error);
    //         throw error;
    //     }
    // },

    // // Lấy chi tiết khóa học theo ID
    // async getCourseById(id) {
    //     try {
    //         const response = await apiClient.get(`/courses/${id}`)
    //         return response.data
    //     } catch (error) {
    //         console.error("Error fetching course detail:", error);
    //         throw error;
    //     }
    // },

    // // Tìm kiếm khóa học
    // async searchCourses(query, filters = {}) {
    //     try {
    //         const params = { q: query, ...filters }
    //         const response = await apiClient.get('/courses/search', { params })
    //         return response.data
    //     } catch (error) {
    //         console.error("Error searching courses:", error);
    //         throw error;
    //     }
    // }

  // Lấy danh sách khóa học
  async getCourses() {
    // Dữ liệu mẫu
    const fakeCourses = {
      1: {
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
      2: {
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
      3: {
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
      4: {
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
      5: {
        id: 5,
        title: "Nodejs - Framework backend hiện đại",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course5.png"),
        student_count: 50000,
        lesson_count: 40,
        duration: 720,
        category: "backend",
        badge: "",
        rating: 4.9,
      },
      6: {
        id: 6,
        title: "Express - Framework backend phổ biến",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course6.png"),
        student_count: 60000,
        lesson_count: 50,
        duration: 840,
        category: "backend",
        badge: "",
        rating: 4.8,
      },
      7: {
        id: 7,
        title: "NestJS - Framework backend hiện đại",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course7.png"),
        student_count: 70000,
        lesson_count: 60,
        duration: 960,
        category: "backend",
        badge: "",
        rating: 4.9,
      },
      8: {
        id: 8,
        title: "Kotlin - Ngôn ngữ lập trình hiện đại",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course8.jpg"),
        student_count: 80000,
        lesson_count: 70,
        duration: 1080,
        category: "backend",
        badge: "",
        rating: 4.8,
      }
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            courses: fakeCourses,
            total: fakeCourses.length,
          },
        });
      }, 200); 
    });
  },


  // Lấy thông tin chi tiết khóa học theo id
  async getCourseDetailById(id) {
    const fakeData = {
      1: {
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
      2: {
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
      3: {
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
      4: {
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
      5: {
        id: 5,
        title: "Nodejs - Framework backend hiện đại",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course5.png"),
        student_count: 50000,
        lesson_count: 40,
        duration: 720,
        category: "backend",
        badge: "",
        rating: 4.9,
      },
      6: {
        id: 6,
        title: "Express - Framework backend phổ biến",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course6.png"),
        student_count: 60000,
        lesson_count: 50,
        duration: 840,
        category: "backend",
        badge: "",
        rating: 4.8,
      },
      7: {
        id: 7,
        title: "NestJS - Framework backend hiện đại",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course7.png"),
        student_count: 70000,
        lesson_count: 60,
        duration: 960,
        category: "backend",
        badge: "",
        rating: 4.9,
      },
      8: {
        id: 8,
        title: "Kotlin - Ngôn ngữ lập trình hiện đại",
        price: 0,
        is_free: true,
        thumbnail: require("@/assets/images/course8.jpg"),
        student_count: 80000,
        lesson_count: 70,
        duration: 1080,
        category: "backend",
        badge: "",
        rating: 4.8,
      }
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: fakeData[id] || null,
        });
      }, 1000);
    });
  },
  async searchCourses(query) {
    try {
      const response = await courseService.getCourses();
      const courses = Object.values(response.data.courses);
      const filteredCourses = courses.filter(course => {
        return course.title.toLowerCase().includes(query.toLowerCase()) || course.category.toLowerCase().includes(query.toLowerCase());
      });
      return filteredCourses;
    } catch(error) {
      console.error("Error searching courses:", error);
    }
  }
};
