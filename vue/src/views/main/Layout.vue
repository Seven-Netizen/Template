<template>
  <el-container>
    <el-aside width="auto">
      <CommonAside/>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>


<script>
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";

export default {
  name: "Layout",
  components: {
    CommonAside,
    CommonHeader,

  }
}
</script>



<style scoped lang="less">
.el-container {
  min-height: 100%;
}

.el-aside {
  background-color: rgb(238, 241, 246);
  box-shadow: 2px 0 6px rgb(0 21 41 / 45%);
  border-radius: 8px 0 0 8px;
}

.el-main {
  padding: 5px 20px;
}
</style>