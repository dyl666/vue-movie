<template>
  <div id="cinema_contianer">
    <ul class="cinema_lists">
      <li>
        <h1>大地影院(澳东世纪店) <span>22.9元起</span></h1>
        <div class="address_con">
          <p class="main">金州区金州区金州区金州区金州区</p>
          <p class="distance">1763.2km</p>
        </div>
        <div class="card">
          <span>小吃</span>
          <span>打折</span>
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
#cinema_contianer {
  .cinema_lists {
    width: 100%;
    overflow: hidden;
    padding: 0 15px;
    li {
      border-bottom: 1px solid #f1f1f1;
      padding: 15px 0;
      h1 {
        font-weight: 400;
        font-size: 16px;
        color: #333;
        margin-bottom: 8px;
        span {
          font-size: 17px;
          color: red;
        }
      }
      .address_con {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        p {
          font-size: 14px;
          color: #999;
        }
      }
      .card {
        span {
          border-radius: 2px;
          border: 1px solid orange;
          color: orange;
          padding: 1px 2px;
          margin-right: 5px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
