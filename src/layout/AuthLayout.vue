<template>
  <div class="main-content">
    <!-- Page content -->
    <div class="container pb-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "auth-layout",
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
};
</script>
<style></style>
