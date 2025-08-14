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
    const fakeCourses = [
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
    ];

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            courses: fakeCourses,
            total: fakeCourses.length,
          },
        });
      }, 1000); 
    });
  },
};
