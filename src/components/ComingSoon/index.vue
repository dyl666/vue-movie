<template>
  <div id="comingSoon_container" ref="comingSoon_container">
    <Loading v-if="isLoading" />
    <Scroller :handleToPull='handleToPull' :handleTouchEnd="handleTouchEnd">
      <ul>
        <li style="padding:0;border:0;display: block;text-align: center;">{{ refeshMsg }}</li>
        <li v-for="item in listData" :key="item.id">
          <div class="pic">
            <img :src=" item.img | setWH('64.90')" alt="" @tap="detailGo(item.id)">
          </div>
          <div class="list_con">
            <h2 class="movie_name" @tap="detailGo(item.id)">{{ item.nm }}</h2>
            <p class="grade">{{ item.wish }}人想看</p>
            <p class="star es_">主演：{{ item.star }}</p>
            <p class="note">{{ item.rt }}上映</p>
          </div>
          <div class="btn_con">
            <button>预售</button>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>

export default {
  name: 'ComingSoon',
  data () {
    return {
      listData: [],
      refeshMsg: '',
      isLoading: true,
      prevCityId: -1
    }
  },
  activated () {
    this.getListData();
  },
  methods: {
    // 进入详情
    detailGo (movieId) {
      this.$router.push('/movie/detail/2/' + movieId);
    },
    // 初始化数据
    getListData (params = '') {
      var cityId = this.$store.state.city.id;
      if (this.prevCityId === cityId) { this.refeshAnimate(params); return; }
      this.isLoading = true;
      let url = '/api/movieComingList?cityId=' + cityId;
      this.$http.$get(url).then(
        res => {
          if (res.msg === "ok") {
            this.listData = res.data.comingList;
            this.isLoading = false;
            this.prevCityId = cityId;
            this.refeshAnimate(params)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    refeshAnimate (params) {
      if (params === 'refesh') {
        this.refeshMsg = "更新成功";
        setTimeout(() => {
          this.refeshMsg = '';
        }, 1000);
      }
    },

    // scroll 监听
    handleToPull () {
      this.refeshMsg = "正在更新";
    },
    // touchend 监听
    handleTouchEnd () {
      this.getListData('refesh')
    }
  }
}
</script>

<style scoped lang="less">
#comingSoon_container {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  padding-top: 44px;
  ul {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #f1f1f1;
      .pic {
        width: 64px;
        height: 90px;
        background: #f5f5f5;
        line-height: 7;
        img {
          border-radius: 3px;
        }
      }
      .list_con {
        flex: 1;
        position: relative;
        margin-left: 10px;
        max-width: 71%;
        .movie_name {
          font-weight: 800;
          color: #333;
          font-size: 18px;
          margin: 3px 0;
        }
        .star {
          max-width: 95%;
        }
        p {
          font-size: 14px;
          color: #666;
          margin: 3px 0;
          i {
            color: #faaf00;
            font-weight: 600;
          }
        }
      }
      .btn_con {
        button {
          color: #fff;
          padding: 2px 5px;
          background: #3c9fe6;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>