<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
  
};
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.red {
  color: red;
}

.background-blue {
  background: blue;
}
html { scroll-behavior: smooth; }
</style>
