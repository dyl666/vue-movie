<template>
  <div id="city_container">
    <div class="city_list">
      <!-- 热门城市 -->
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="city_hot_lists">
          <li v-for="item in hotList" :key="item.id">{{ item.nm }}</li>
        </ul>
      </div>
      <!-- 城市列表 -->
      <div class="city_sort" ref="city_sort">
        <div v-for="item in cityList" :key="item.index">
          <h2>{{ item.index }}</h2>
          <ul>
            <li v-for="citesItem in item.lists" :key="citesItem.id">{{ citesItem.nm }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 城市索引 -->
    <div class="city_index">
      <ul>
        <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      hotList: [],
      cityList: []
    }
  },
  mounted () {
    let url = '/api/cityList';
    this.$http.$get(url).then(
      res => {
        console.log(res);
        if (res.msg === "ok") {
          // [{ 'index': 'A' }, { lists: [{ nm: '阿拉善盟', id: 123 }] }]
          var cities = res.data.cities;
          var { cityList, hotList } = this.formatCityList(cities);
          this.cityList = cityList;
          this.hotList = hotList;
          console.log(this.cityList)
        }
      }).catch(err => {
        console.log(err)
      })
  },
  methods: {

    formatCityList (cities) {
      var hotList = [];
      var cityList = [];

      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot == 1) {
          hotList.push({ nm: cities[i].nm, id: cities[i].id })
        }
      }

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) { // 不存在，新添加
          cityList.push({ index: firstLetter, lists: [{ nm: cities[i].nm, id: cities[i].id }] });
        } else { // 已存在，累加
          for (var j = 0; j < cityList.length; j++) {
            if (firstLetter === cityList[j].index) {
              cityList[j].lists.push({ nm: cities[i].nm, id: cities[i].id })
            }
          }
        }
      }

      /**排序 A B C D... */
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        }
        else if (n1.index < n2.index) {
          return -1;
        }
      })

      /**是否存在于结果集 */
      function toCom (firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (firstLetter === cityList[i].index) {
            return false;
          }
        }
        return true;
      }

      return {
        cityList, hotList
      }

    },

    /**索引滑动 */
    handleToIndex (index) {
      var h2 = this.$refs.city_sort.getElementsByTagName('h2');
      // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      document.documentElement.scrollTop = h2[index].offsetTop - 88;
    }
  }

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
