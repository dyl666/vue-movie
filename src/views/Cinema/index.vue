<template>
  <div id="cinema-container">
    <Header title="电影院" />

    <!-- //内容 -->
    <div class="cinema_con">
      <div class="cinema_menu">
        <div class="city_switch">
          全城<i class="iconfont icon-sanjiao_xia"></i>
        </div>
        <div class="brand_switch">
          品牌<i class="iconfont icon-sanjiao_xia"></i>
        </div>
        <div class="feature_switch">
          特色<i class="iconfont icon-sanjiao_xia"></i>
        </div>
      </div> 
      <CinemaList />
    </div>

    <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/TabBar'
import CinemaList from '@/components/CinemaList'

export default {
  components: {
    Header,
    Tabbar,
    CinemaList
  }

}
</script>

<style scoped lang="less">
#cinema-container {
  .cinema_con {
    padding-top: 44px;
    .cinema_menu {
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 44px;
      line-height: 44px;
      color: #333;
      font-size: 15px;
      border-bottom: 1px solid #f1f1f1;
      font-weight: 600;
      i{
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
}
</style>