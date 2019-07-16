<template>
  <div id="movie_container">

    <!-- 头部 -->
    <Header title="电影" />

    <!-- 内容 -->
    <div class="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="menu_city">
          <p>杭州<i class="iconfont icon-sanjiao_xia"></i></p>
        </router-link>
        <div class="menu_hot">
          <router-link tag="p" to="/movie/nowPlaying">正在热映</router-link>
          <router-link tag="p" to="/movie/comingSoon">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="menu_search">
          <p class="iconfont icon-sousuo"></p>
        </router-link>
      </div>

      <keep-alive>
        <router-view />
      </keep-alive>

    </div>

    <!-- 底部 -->
    <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/TabBar'
export default {
  components: {
    Header,
    Tabbar
  }

}
</script>

<style scoped lang="less">
#movie_container {
  width: 100%;
  height: 100%;
  .content {
    .movie_menu .router-link-active {
      border-bottom: 2px solid red;
      color: red;
      p {
        color: red;
      }
    }
    .movie_menu {
      background: #fff;
      z-index: 999;
      position: fixed;
      top: 44px;
      left: 0;
      width: 100%;
      height: 44px;
      line-height: 44px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      padding: 0 15px;
      .menu_city {
        i {
          float: right;
          margin-top: 2px;
          font-size: 12px;
        }
      }
      .menu_search {
        p {
          font-size: 20px;
        }
      }
      p {
        font-size: 15px;
        color: #333;
        font-weight: 700;
      }
      .menu_hot {
        display: flex;
        justify-content: space-between;
        p {
          width: 80px;
          text-align: center;
          margin: 0 12px;
        }
      }
    }
  }
}
</style>
