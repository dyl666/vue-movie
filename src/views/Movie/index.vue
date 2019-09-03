<template>
  <div id="movie_container">
 
      <!-- 头部 -->
      <Header title="电影" />

      <!-- 内容 -->
      <div class="content">
        <div class="movie_menu">
          <router-link tag="div" to="/movie/city" class="menu_city">
            <p>{{$store.state.city.nm}}<i class="iconfont icon-sanjiao_xia"></i></p>
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
 

      <!-- 底部 -->
      <Tabbar />
    </div>

    <!-- 详情 -->
    <router-view name="detail" />

  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/TabBar'
import { messageBox } from '@/components/JS'
export default {
  name: 'Movie',
  components: {
    Header,
    Tabbar,
  },
  mounted () {

    // 获取定位
    let url = '/api/getLocation';
    this.$http.$get(url).then(
      res => {
        var nowCityId = res.data.id;
        if (this.$store.state.city.id == nowCityId) { return; }
        if (res.msg === "ok") {
          messageBox({
            title: '当前定位',
            con: res.data.nm,
            cancel: '取消',
            ok: '切换',
            cancelDone () {
              console.log('cancel click')
            },
            okDone () {
              window.localStorage.setItem('nowCityNm', res.data.nm)
              window.localStorage.setItem('nowCityId', res.data.id)
              window.location.reload();
            },
          })
        }
      }).catch(err => {
        console.log(err)
      })


  }

}
</script>

<style scoped lang="less">
#movie_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    flex: 1;
    // touch-action: none;
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
      position: absolute;
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
