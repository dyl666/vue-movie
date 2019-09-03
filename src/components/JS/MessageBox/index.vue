<template>
  <div id="message-box">
    <div class="con">
      <h2>{{ title }}</h2>
      <p>{{ con }}</p>
      <div>
        <div @touchstart="cancelDone">{{ cancel }}</div>
        <div @touchstart="okDone">{{ ok }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox'
}
</script>

<style scoped>
#message-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
}
#message-box .con {
  width: 60%;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  color: #333;
  border: 1px solid #f1f1f1;
  box-shadow: 2px 2px 3px 2px #e5e5e5;
}
#message-box .con h2 {
  font-size: 15px;
  padding: 6px 0;
}
#message-box .con p {
  font-size: 14px;
  padding: 7px 0;
}
#message-box .con > div {
  font-size: 14px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #f1f1f1;
}
#message-box .con div div {
  padding: 10px 0;
  border-right: 1px solid #f1f1f1;
  flex: 1;
}
#message-box .con div div:first-child {
  border-right: 1px solid #f1f1f1;
}
</style>
