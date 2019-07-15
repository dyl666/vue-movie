<template>
  <div id="tabbar_content">
    <footer>
      <ul class="tabbar">
        <router-link class="active" tag="li" to="/movie">
          <p class="iconfont icon-dianying"></p>
          <p>电影</p>
        </router-link>
        <router-link tag="li" to="/cinema">
          <p class="iconfont icon-yingyuanb"></p>
          <p>影院</p>
        </router-link>
        <router-link tag="li" to="/mine">
          <p class="iconfont icon-ziyuan"></p>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
#tabbar_content {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid #f1f1f1;
  footer {
    width: 100%;
    height: 100%;
    .tabbar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
      li {
        width: 33.333333%;
        text-align: center;
        p {
          text-align: center;
          width: 100%;
          color: #333;
        }
        p:first-child {
          font-size: 20px;
          font-weight: 600;
        }
        p:last-child {
          font-size: 14px;
        }
      }
      li.router-link-active {
        p {
          color: red;
        }
      }
    }
  }
}
</style>
