<style lang="scss">

</style>
<template>
  <div id="admin">
      <!--后台管理系统-->
        <mer-header></mer-header>
        <router-view></router-view>
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

