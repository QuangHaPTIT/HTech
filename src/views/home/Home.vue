<template>
  <div id="wrapper">
    <TheHeader />
    <TheHeroSection />
    <TheFeaturesSection />
    <TheCoursesSection />
    <TheFloatingIcons />
  </div>
</template>

<script>
import TheCoursesSection from "@/components/layout/TheCoursesSection.vue";
import TheFeaturesSection from "@/components/layout/TheFeaturesSection.vue";
import TheFloatingIcons from "@/components/layout/TheFloatingIcons.vue";
import TheHeader from "@/components/layout/TheHeader.vue";
import TheHeroSection from "@/components/layout/TheHeroSection.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    TheHeader,
    TheHeroSection,
    TheFeaturesSection,
    TheCoursesSection,
    TheFloatingIcons,
  },
  
};
</script>

<style scoped></style>
