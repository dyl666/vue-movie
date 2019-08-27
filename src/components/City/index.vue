<template>
  <div id="city_container" ref="city_container">
    <Loading v-if="isLoading" />
    <Scroller :handleToPull='handleToPull' :handleTouchEnd="handleTouchEnd" ref="city_list">
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
    </Scroller>
    <!-- 城市索引 -->
    <div class="city_index">
      <ul>
        <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)" @touchend="handleToEnd(index)">{{ item.index }}</li>
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
      cityList: [],
      isLoading: true
    }
  },
  mounted () {
    var cityList = window.localStorage.getItem('cityList');
    var hotList = window.localStorage.getItem('hotList');
    if (cityList && hotList) {
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
      return;
    }
    this.getListData();
  },
  methods: {

    // 进入详情
    movieDetail () {
      console.log('详情')
    },
    // 初始化数据
    getListData (params = '') {
      let url = '/api/cityList';
      this.$http.$get(url).then(
        res => {
          if (res.msg === "ok") {
            // [{ 'index': 'A' }, { lists: [{ nm: '阿拉善盟', id: 123 }] }]
            var cities = res.data.cities;
            var { cityList, hotList } = this.formatCityList(cities);
            this.cityList = cityList;
            this.hotList = hotList;
            window.localStorage.setItem('cityList', JSON.stringify(cityList));
            window.localStorage.setItem('hotList', JSON.stringify(hotList));
            this.isLoading = false;
            if (params === 'refesh') {
              this.refeshMsg = "更新成功";
              setTimeout(() => {
                this.refeshMsg = '';
              }, 1000);
            }
          }
        }).catch(err => {
          console.log(err)
        })
    },
    // scroll 监听
    handleToPull () {
      // this.refeshMsg = "正在更新";
    },
    // touchend 监听
    handleTouchEnd () {
      // this.getListData('refesh')
    },
    // 处理城市数据
    formatCityList (cities) {
      var hotList = [];
      var cityList = [];

      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot == 1) {
          hotList.push({ nm: cities[i].nm, id: cities[i].id })
        }
      }

      for (var k = 0; k < cities.length; k++) {
        var firstLetter = cities[k].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) { // 不存在，新添加
          cityList.push({ index: firstLetter, lists: [{ nm: cities[k].nm, id: cities[k].id }] });
        } else { // 已存在，累加
          for (var j = 0; j < cityList.length; j++) {
            if (firstLetter === cityList[j].index) {
              cityList[j].lists.push({ nm: cities[k].nm, id: cities[k].id })
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
      this.$refs.city_list.handleToPullTop(-h2[index].offsetTop)
      // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      // document.documentElement.scrollTop = h2[index].offsetTop - 88;
    },
    handleToEnd (index) {
      console.log('handleToEnd--' + index)
    }
  }

}
</script>

<style scoped lang="less">
#city_container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 88px;
  .city_hot {
    background: #fff3f2;
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
    background: #fff3f2;
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
