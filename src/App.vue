<template>
  <div id="app">
    <div class="main">
      <router-link to="/main">Bai Tap 02</router-link>
      <router-link to="/table">Bai Tap 03</router-link>
      <router-link to="/">Bai Tap 01</router-link>
    </div>

    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  background: #c0c0c0;
  width: 100vw;
  height: 100vh;
}
.main {
  display: flex;
  justify-content: space-around;
}
</style>
