<template>
  <el-header>
    <div class="collapse-btn">
      <span
          :class="collapseBtnClass"
          style="cursor: pointer"
          @click="collapseMenu()"
      ></span>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }" style="margin-left: 15px">渠道管理</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in filteredBreadcrumbItems" :key="item.id" :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>

    </div>
  </el-header>

</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "CommonHeader",
  data () {
    return {
      breadcrumbItems: [],
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
      ]
    }
  },
  created() {
    this.breadcrumbItems = this.getBreadcrumbItems(this.$route.path);
  },
  methods: {
    // 使用...mapMutations解构出"tab"中的方法
    ...mapMutations("tab", ["collapseMenu"]), //控制菜单的展开和折叠状
    // 获取面包屑数据
    getBreadcrumbItems(currentPath) {
      const breadcrumbs = [];
      function findPath(menu, path) {
        for (let i = 0; i < menu.length; i++) {
          const item = menu[i];
          if (item.path === path) {
            breadcrumbs.push(item);
            return true;
          } else if (item.children && item.children.length > 0) {
            if (findPath(item.children, path)) {
              breadcrumbs.push(item);
              return true;
            }
          }
        }
        return false;
      }

      findPath(this.menuData, currentPath);
      return breadcrumbs.reverse();
    },
  },
  computed: {
    // 使用...mapState解构出"tab"中的属性  控制菜单的展开和折叠状态的图标
    ...mapState({
      collapseBtnClass: (state) => state.tab.collapseBtnClass,
    }),
    filteredBreadcrumbItems() {
      // 过滤掉首页项，如果它在 breadcrumbItems 中
      return this.breadcrumbItems.filter(item => item.path !== '/home');
    }
  },
  watch: {
    '$route': function (newRoute) {
      this.breadcrumbItems = this.getBreadcrumbItems(newRoute.path);
    }
  },

}
</script>


<style scoped lang="less">
.el-header {
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  line-height: 60px;
  padding: 0 6px;
  display: flex;

  .collapse-btn {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    font-size: 23px;

    /deep/ .el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;

        &.is-link {
          color: #666;
        }
      }

      &:last-child {
        .el-breadcrumb__inner {
          color: #000;
        }
      }
    }
  }

}

</style>