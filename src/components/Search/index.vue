<template>
  <div id="search_container">
    <div class="search_input">
      <input type="text">
    </div>
    <div class="search_lists">
      <h2 class="title">电影/电视剧/综艺</h2>
      <ul>
        <li>
          <div class="pic">
            <img src="" alt="">
          </div>
          <div class="list_con">
            <h2 class="movie_name">无名之辈</h2>
            <p class="grade">A Cool Fish</p>
            <p class="star">剧情、喜剧、犯罪</p>
            <p class="note">2018-7-13</p>
          </div>
          <div class="btn_con">
            <span>8.5</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

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
          background: pink;
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