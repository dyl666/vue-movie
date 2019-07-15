<template>
  <div id="movie-container">
    <Header title="我的" />
    <Login />
    <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/TabBar'
import Login from '@/components/Login'

export default {
  components: {
    Header,
    Tabbar,
    Login
  }

}
</script>

<style scoped lang = "less">
</style>
