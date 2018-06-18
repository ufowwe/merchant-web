<style lang="scss">
  .page-sidebar.menu-compact.page-content {
    margin-left: 43px;
  }
  .page-content {
    display: block;
    margin-left: 224px;
    margin-right: 0;
    margin-top: 0;
    min-height: 100%;
    padding: 0;
  }
</style>
<template>
  <div id="admin">
      <!--后台管理系统-->
        <mer-header></mer-header>
        <div class="page-content">
          <router-view></router-view>
        </div>
  </div>
</template>

<script>
  import merHeader from "@/components/header/header.vue";
  export default {
    name :"mer-home",
    components: {
      merHeader
    }
  }
</script>

