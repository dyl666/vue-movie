<template>
  <div id="header_content">
    <slot></slot>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '电影xx'
    }
  },
}
</script>

<style scoped lang="less">
#header_content { 
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: red;
  h2 {
    font-size: 15px;
    color: #fff;
    width: 100%;
    text-align: center;
  }
}
</style>
