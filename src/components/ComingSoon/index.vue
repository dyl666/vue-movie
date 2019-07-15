<template>
  <div id="comingSoon_container">
    <ul>
      <li>
        <div class="pic">
          <img src="" alt="">
        </div>
        <div class="list_con">
          <h2 class="movie_name">无名之辈</h2>
          <p class="grade">17098人想看</p>
          <p class="star">主演：任素汐、陈建斌、潘斌龙</p>
          <p class="note">2018-7-13上映</p>
        </div>
        <div class="btn_con">
          <button>预售</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
#comingSoon_container {
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