<template>
  <div id="nowPlaying_container">
    <ul>
      <li v-for="item in listData" :key="item.id">
        <div class="pic">
          <img :src="item.img | setWH('64.90')" alt="">
        </div>
        <div class="list_con">
          <h2 class="movie_name">{{ item.nm }}</h2>
          <p class="grade">观众评分：<i>{{ item.sc }}</i></p>
          <p class="star es_">主演：{{ item.star }}</p>
          <p class="note">{{ item.showInfo }}</p>
        </div>
        <div class="btn_con">
          <button>购票</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying',
  data () {
    return {
      listData: []
    }
  },
  mounted () {
    let url = '/api/movieOnInfoList?cityId=10';
    this.$http.$get(url).then(
      res => {
        console.log(res);
        if (res.msg === "ok") {
          this.listData = res.data.movieList;
        }
      }).catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="less">
#nowPlaying_container {
  padding: 0 15px;
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
        width: 60%;
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
          background: red;
          border-radius: 3px;
        }
      }
    }
  }
}
</style>