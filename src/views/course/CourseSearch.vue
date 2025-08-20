<template>
    <div id="wrapped">
        <TheHeader />
        <ListCourseSearch :query="searchQuery"/>
        <TheFooter />
    </div>
</template>


<script>
import ListCourseSearch from '@/components/courses/ListCourseSearch.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import TheHeader from '@/components/layout/TheHeader.vue';

export default {
    name: "CourseSearch",
    components: {
        TheHeader,
        ListCourseSearch,
        TheFooter
    },
    
    computed: {
        searchQuery() {
            return this.$route.query.search || '';
        }
    }
}
</script>


<style scoped>
</style>