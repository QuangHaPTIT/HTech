<template>
  <div id="wrapped">
    <TheHeader />
    <MainCourseDetail :id="courseId" />
    <TheFloatingIcons />
    <TheFooter />
  </div>
</template>

<script>
import MainCourseDetail from '@/components/courses/MainCourseDetail.vue';
import TheFloatingIcons from '@/components/layout/TheFloatingIcons.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    name: "CourseDetail",
    components: {
        MainCourseDetail,
        TheHeader,
        TheFloatingIcons,
        TheFooter
    },
    computed: {
        courseId() {
            return this.$route.params.id;
        }
    }
}
</script>

<style scoped>

</style>
