<template>
  <div id="cinema_contianer" :style="{paddingTop:(cinemasListProps.length>0?'0':'44px'),paddingBottom:(cinemasListProps.length>0?'0':'50px')}">
    <ul class="cinema_lists">
      <li v-for="item in cinemasList" :key="item.id">
        <h1>{{ item.nm}} <span>{{ item.sellPrice }}元起</span></h1>
        <div class="address_con">
          <p class="main">{{ item.addr }}</p>
          <p class="distance">{{ item.distance }}</p>
        </div>
        <div class="card">
          <span v-for="(card,key) in item.tag" :key="key">
            <span v-if="card > 0 " class="con" :class="key | classCard">{{ key | cardFilter }}</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CinemaList',
  props: {
    cinemasListProps: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      cinemasList: []
    }
  },
  mounted () {
    if (this.cinemasListProps.length > 0) {
      this.cinemasList = this.cinemasListProps;
      return;
    }
    let url = '/api/cinemaList?cityId=10';
    this.$http.$get(url).then(
      res => {
        console.log(res);
        if (res.msg === "ok") {
          this.cinemasList = res.data.cinemas;
        }
      }).catch(err => {
        console.log(err)
      })
  },
  filters: {
    cardFilter: function (value) {

      // 方法一：
      var cardArray = [
        { key: 'snack', value: '小吃' },
        { key: 'vipTag', value: '折扣卡' },
        { key: 'allowRefund', value: '退款' },
        { key: 'endorse', value: '签名' },
        { key: 'sell', value: '出售' },
      ]

      for (var i = 0; i < cardArray.length; i++) {
        if (value === cardArray[i].key) {
          return cardArray[i].value;
        }
      }

      return '';

      // 方法二：
      // switch (value) {
      //   case 'sell':
      //     return '出售';
      //     break;
      //   case 'allowRefund':
      //     return '支持退款';
      //     break;
      //   case 'snack':
      //     return '小吃';
      //     break;
      //   case 'vipTag':
      //     return '折扣卡';
      //     break;
      //   default:
      //     return '';
      // }
    },
    classCard (value) {
      var cardArray = [
        { key: 'snack', value: 'bl' },
        { key: 'vipTag', value: 'bl' },
        { key: 'allowRefund', value: 'bl' },
        { key: 'endorse', value: '' },
        { key: 'sell', value: '' },
      ]

      for (var i = 0; i < cardArray.length; i++) {
        if (value === cardArray[i].key) {
          return cardArray[i].value;
        }
      }

      return '';
    }
  }
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
        .main {
          margin-right: 10px;
        }
        p {
          font-size: 14px;
          color: #999;
        }
      }
      .card {
        span {
          font-size: 12px;
        }
        span.con {
          border-radius: 2px;
          border: 1px solid #589daf;
          color: #589daf;
          padding: 1px 2px;
          margin-right: 5px;
        }
        span.con.bl {
          color: #f90;
          border: 1px solid #f90;
        }
      }
    }
  }
}
</style>
