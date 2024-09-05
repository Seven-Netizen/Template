<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  box-shadow: 2px 0 6px rgb(0 21 41 / 45%);
  border-radius: 8px;
}
</style>