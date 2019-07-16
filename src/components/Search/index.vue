<template>
  <div id="search_container">
    <div class="search_input">
      <input type="text" v-model="keyword">
    </div>

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

    <div style="width:100%;height:10px;background:#f5f5f5"></div>

    <!-- 影院 -->
    <div class="search_lists" v-if="cinemasList.length>0">
      <h2 class="title">影院</h2>
      <CinemaList :cinemasListProps="cinemasList" />
    </div>

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
    }
  },
  watch: {
    keyword (value) {
      if (!value) { return; }
      this.cancelRequest();
      let url = '/api/searchList?cityId=10&kw=' + value;
      var that = this;
      axios.get(url, {
        cancelToken: new axios.CancelToken(function executor (c) {
          that.source = c;
        }) // 这里声明的cancelToken其实相当于是一个标记，
        // 当我们要取消请求的时候，可以通过这个找到该请求 
      }).then(
        res => {
          console.log(res)
          if (res.data.msg === "ok" && res.data.data.movies) {
            this.moviesList = res.data.data.movies.list;
          }
          if (res.data.msg === "ok" && res.data.data.cinemas) {
            this.cinemasList = res.data.data.cinemas.list;
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
  .search_input {
    background: #f5f5f5;
    padding: 10px 0;
    input {
      width: 95%;
      display: block;
      background: #fff;
      border-radius: 3px;
      padding: 8px 6px;
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