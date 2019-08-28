<template>
  <div id="search_container">
    <Loading v-if="isLoading" />
    <div class="search_input">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" v-model="keyword" placeholder="请输入关键字">
    </div>

    <Scroller :handleToPull='handleToPull' :handleTouchEnd="handleTouchEnd" ref="city_list">
      <div style="paddingTop:50px">
        <p v-if="moviesList.length == 0 && cinemasList.length == 0" style="text-align:center;font-size:13px;color:#999;padding:15px 0;">暂无数据</p>
        <!-- 电影/电视剧/综艺 -->
        <div class="search_lists" v-if="moviesList.length>0">
          <h2 class="title">电影/电视剧/综艺</h2>
          <ul>
            <li v-for="item in moviesList" :key="item.id">
              <div class="pic">
                <img :src="item.img |setWH('64.90') " alt="">
              </div>
              <div class="list_con">
                <h2 class="movie_name">{{ item.nm }}</h2>
                <p class="grade">{{ item.enm }}</p>
                <p class="star es_">{{ item.cat }}</p>
                <p class="note">{{ item.rt }}</p>
              </div>
              <div class="btn_con">
                <span>{{ item.sc }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 影院 -->
        <div class="search_lists" v-if="cinemasList.length>0">
          <div style="width:100%;height:10px;background:#f5f5f5"></div>
          <h2 class="title">影院</h2>
          <CinemaList :cinemasListProps="cinemasList" />
        </div>

      </div>
    </Scroller>

  </div>
</template>

<script>
import axios from "axios";
import CinemaList from '@/components/CinemaList'

export default {
  name: 'Search',
  components: {
    CinemaList
  },
  data () {
    return {
      isLoading: false,
      keyword: '',
      cinemasList: [],
      moviesList: []
    }
  },
  mounted () {

  },
  methods: {
    cancelRequest () {
      if (typeof this.source === "function") {
        this.source('终止请求')
      }
    },
    // 进入详情
    movieDetail () {
      console.log('详情')
    },
    // scroll 监听
    handleToPull () {
      // this.refeshMsg = "正在更新";
    },
    // touchend 监听
    handleTouchEnd () {
      // this.getListData('refesh')
    }
  },
  watch: {
    keyword (value) {
      if (!value) { return; }
      this.cancelRequest();
      var cityId = this.$store.state.city.id;
      let url = '/api/searchList?cityId=' + cityId + '&kw=' + value;
      var that = this;
      this.isLoading = true;
      axios.get(url, {
        cancelToken: new axios.CancelToken(function executor (c) {
          that.source = c;
        }) // 这里声明的cancelToken其实相当于是一个标记，
        // 当我们要取消请求的时候，可以通过这个找到该请求 
      }).then(
        res => {
          console.log(res)
          if (res.data.msg === "ok") {
            this.isLoading = false;
            if (res.data.data.movies) {
              this.moviesList = res.data.data.movies.list;
            } else {
              this.moviesList = [];
            }
            if (res.data.data.cinemas) {
              this.cinemasList = res.data.data.cinemas.list;
            } else {
              this.cinemasList = [];
            }
          }

        }).catch(err => {
          if (axios.isCancel(err)) {
            console.log('Request canceled', err.message); // 请求如果被取消，返回取消的message
          } else {
            console.log(err)
          }
        })

    }
  }

}
</script>

<style scoped lang="less">
#search_container {
  width: 100%;
  height: 100%;
  .search_input {
    background: #f5f5f5;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 999;
    i {
      position: absolute;
      left: 16px;
      top: 34%;
      /* bottom: 50%; */
      margin: auto;
    }
    input {
      width: 95%;
      display: block;
      background: #fff;
      border-radius: 3px;
      padding: 8px 7%;
      margin: 0 auto;
    }
  }
  .search_lists {
    h2.title {
      color: #bbb;
      font-size: 15px;
      padding: 7px 15px;
      border-bottom: 1px solid #f1f1f1;
    }
    ul {
      padding: 0 15px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 2px dotted #f1f1f1;
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
          span {
            color: #faaf00;
          }
        }
      }
    }
  }
}
</style>