import VueRouter from "vue-router";
import Vue from "vue";
import Login from "@/views/auth/Login.vue";
import Home from "@/views/home/Home.vue";
import CourseDetail from "@/views/course/CourseDetail.vue";
import Register from "@/views/auth/Register.vue";
import CourseSearch from "@/views/course/CourseSearch.vue";
import PurrchaseGuide from "@/views/purchase-guide/PurrchaseGuide.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/courses/:id",
    name: "course-detail",
    component: CourseDetail,
    props: true,
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/course-search/:search?",
    name: "course-search",
    component: CourseSearch,
    props: true
  },
  {
    path: "/purchase-guide",
    name: "purchase-guide",
    component: PurrchaseGuide
  }
  // {
  //     path: '/register',
  //     name: 'register',
  //     component: () => import('@/views/auth/Register.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else if (to.hash) {
          resolve({ selector: to.hash });
        } else if (from.name === "course-detail" && to.name === "home") {
          resolve(false);
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 100);
    });
  },
});

let homeScrollPosition = 0;

router.beforeEach((to, from, next) => {
  console.log('Router beforeEach:', { from: from.name, to: to.name });
  
  // Lưu scroll position khi rời khỏi home
  if (from.name === 'home' && to.name === 'course-detail') {
    homeScrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log('Saved home scroll position:', homeScrollPosition);
  }
  next();
});

router.afterEach((to, from) => {
  console.log('Router afterEach:', { from: from.name, to: to.name });
  
  // Khôi phục scroll position khi quay về home
  if (to.name === 'home' && from.name === 'course-detail') {
    console.log('Restoring home scroll position:', homeScrollPosition);
    setTimeout(() => {
      if (homeScrollPosition > 0) {
        window.scrollTo(0, homeScrollPosition);
        homeScrollPosition = 0; // Reset
      }
    }, 300);
  }
});

export default router;
