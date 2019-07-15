<template>
  <div id="city_container">
    <!-- 热门城市 -->
    <div class="city_hot">
      <h2>热门城市</h2>
      <ul class="city_hot_lists">
        <li>北京</li>
        <li>杭州</li>
        <li>上海</li>
        <li>上海</li>
        <li>上海</li>
        <li>上海</li>
      </ul>
    </div>
    <!-- 城市列表 -->
    <div class="city_sort">
      <div>
        <h2>A</h2>
        <ul>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
        </ul>
      </div>
      <div>
        <h2>A</h2>
        <ul>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
        </ul>
      </div>
      <div>
        <h2>B</h2>
        <ul>
          <li>北京</li>
          <li>保定</li>
        </ul>
      </div>
      <div>
        <h2>C</h2>
        <ul>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
          <li>阿拉善盟</li>
        </ul>
      </div>
    </div>
    <!-- 城市索引 -->
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
#city_container {
  width: 100%;
  background: #fff3f2;
  .city_hot {
    padding-top: 20px;
    h2 {
      padding: 6px 15px;
      font-size: 15px;
      color: #333;
      font-weight: normal;
      background: #ececec;
    }
    .city_hot_lists {
      overflow: hidden;
      padding-bottom: 15px;
      padding-right: 20px;
      li {
        background: #fff;
        float: left;
        width: 27.6%;
        margin: 15px 10px 0;
        padding: 4px 0;
        text-align: center;
        border: 1px solid #f1f1f1;
        border-radius: 2px;
        font-size: 16px;
      }
    }
  }
  .city_sort {
    h2 {
      padding: 6px 15px;
      font-size: 15px;
      color: #333;
      font-weight: normal;
      background: #ececec;
    }
    ul {
      overflow: hidden;
      padding: 5px 15px;
      li {
        margin: 10px 0;
      }
    }
  }
  //   城市索引
  .city_index {
    position: fixed;
    top: 0;
    z-index: 99;
    right: 0;
    bottom: 0;
    width: 20px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      background: #fff;
      border-left: 1px solid #f1f1f1;
      border-right: 1px solid #f1f1f1;
      height: 100%;
    }
  }
}
</style>
