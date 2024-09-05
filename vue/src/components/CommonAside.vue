<template>
  <el-menu
      :default-active="defaultActive"
      :router="true"
      :collapse="isCollapse"
      active-text-color="#ffbe36"
      background-color="#676f79"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @close="handleClose"
      @open="handleOpen"
      :unique-opened="true"
  >
    <!-- 系统标题 -->
    <div class="title">
      <img src="@/assets/logo.png"/>
      <b v-if="!isCollapse">渠道测试系统</b>
    </div>

    <!-- 系统菜单 -->
    <el-menu-item
        v-for="item in menuData"
        :key="item.name"
        :index="item.path"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.name }}</span>
    </el-menu-item>


  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      menuData: [
        {
          name: "渠道管理",
          icon: "el-icon-menu",
          path: "/home"
        },
        {
          name: "参数生成",
          icon: "el-icon-setting",
          path: "/param"
        }
      ],
      defaultActive: "/home"
    }
  },

  methods: {
    // 当菜单打开时触发的函数
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 当菜单关闭时触发的函数
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    // isCollapse: false, 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler(newRoute) {
        this.defaultActive = newRoute.path;
      }
    }
  },
  created() {
    this.defaultActive = this.$route.path;
  }
}
</script>


<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.el-menu-vertical-demo > .title {
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.el-menu {
  height: 98vh;
  min-height: 100%;
  border: none;
  overflow-x: hidden;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }

  .title {
    img {
      width: 20px;
      position: relative;
      top: 5px;
    }

    b {
      color: white;
      margin-left: 5px;
      font-size: 17px;
      font-weight: 100;
    }
  }
}

/* 隐藏滚动条，但保留滚动功能 */
.el-menu::-webkit-scrollbar {
  width: 6px; /* 可以设置为你想要的宽度 */
}

.el-menu::-webkit-scrollbar-track {
  background: transparent; /* 设置滚动条轨道颜色 */
}

.el-menu::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2); /* 设置滚动条颜色 */
  border-radius: 10px; /* 设置滚动条圆角 */
}
</style>