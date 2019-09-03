<template>
  <div id="movie-detail-container" class="slide-enter-animation">
    <Header title="电影详情">
      <i class="iconfont icon-sousuo" @touchstart="back()" style="position: absolute;left: 15px;"></i>
    </Header>
    <!-- <Scroller> -->
    <div class="movie-content content">
      <div class="mv-top">
        <div class="bj"></div>
        <div class="con">
          <div class="left">
            <img v-if="detailMovieData.img" :src="detailMovieData.img | setWH1('128.150')" alt="">
          </div>
          <div class="right">
            <h2>{{ detailMovieData.nm }}</h2>
            <p>{{ detailMovieData.enm }}</p>
            <p>{{ detailMovieData.sc }}</p>
            <p>剧情：{{ detailMovieData.cat }}</p>
            <p>{{ detailMovieData.src }}、{{ detailMovieData.episodeDur }}分钟</p>
            <p>{{ detailMovieData.pubDesc }}</p>
          </div>
        </div>
      </div>
      <div class="mv-text">
        <p>{{ detailMovieData.dra }}</p>
      </div>
      <!-- person -->
      <div class="mv-person swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <ul class="swiper-slide">
            <li v-for="(item,index) in detailMovieData.photos" :key="index">
              <div class="img-box">
                <img :src="item | setWH('80.100')" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- person end -->

    </div>
    <!-- </Scroller> -->
  </div>
</template>

<script>
import Header from "@/components/Header"
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
  name: 'movieDetail',
  components: {
    Header,
  },
  data () {
    return {
      detailMovieData: {}
    }
  },
  props: ['movieId'],
  mounted () {

    this.isLoading = true;
    let url = '/api/detailmovie?movieId=' + this.movieId;
    this.$http.$get(url).then(
      res => {
        if (res.msg === "ok") {
          this.detailMovieData = res.data.detailMovie;
          this.$nextTick(() => {

            new Swiper(this.$refs.swiper, {
              slidesPerView: 'auto',//可选选项，自动滑动
              freeMode: true,
              freeModeSticky: true
            })


          })
        }
      }).catch(err => {
        console.log(err)
      })


  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped lang="less">
#movie-detail-container.slide-enter-animation {
  animation: 0.3s slideEnter;
}

@keyframes slideEnter {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.swiper-slide {
  width: auto !important;
}
#movie-detail-container {
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  .movie-content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    touch-action: none;
    padding-bottom: 0;
    .mv-top {
      overflow: hidden;
      position: relative;
      .bj {
        width: 100%;
        height: 200px;
        background: url("http://p1.meituan.net/128.150/movie/648bbced128324a4b4ccf7db6c564a251744344.jpg")
          center center no-repeat;
        background-size: 100% 100%;
        filter: blur(28px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
      }
      .con {
        display: flex;
        padding: 15px;
        .left {
          width: 128px;
          min-height: 160px;
          height: auto;
          img {
            width: 100%;
            height: 100%;
            border-radius: 2px;
            border: 1px solid #fff;
          }
        }
        .right {
          flex: 1;
          color: #fff;
          padding: 10px 0px 10px 15px;
          h2 {
            font-size: 18px;
          }
          p {
            font-size: 14px;
            padding: 2px 0;
          }
        }
      }
    }
    .mv-text {
      padding: 10px 15px;
      p {
        font-size: 15px;
        color: #333;
      }
    }
    .mv-person {
      margin: 5px;
      padding-bottom: 20px;
      ul {
        li {
          float: left;
          padding: 0 10px;
          .img-box {
            width: 80px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
              display: block;
              margin: 0 auto;
              border: 1px solid #f1f1f1;
            }
          }

          p {
            font-size: 12px;
            padding: 5px 0;
          }
        }
      }
    }
  }
}
</style>
