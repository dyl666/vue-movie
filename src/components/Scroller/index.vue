<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroller',
  props: {
    handleToPull: {
      type: Function,
      default: function () { }
    },
    handleToScroll: {
      type: Function,
      default: function () { }
    },
    handleTouchEnd: {
      type: Function,
      default: function () { }
    },
  },
  data () {
    return {}
  },
  mounted () {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 2,
      stopPropagation: true
    });

    this.scroll = scroll;

    scroll.on('scroll', (pos) => {
      if (pos.y > 30) {
        this.handleToPull(); // 下拉
      } else {
        this.handleToScroll(); // 滚动
      }
    })

    scroll.on('touchEnd', (pos) => {
      if (pos.y > 30) {
        this.handleTouchEnd();
      }
    })

  },
  methods: {
    handleToPullTop (y) {
      this.scroll.scrollTo(0, y, 300)
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
