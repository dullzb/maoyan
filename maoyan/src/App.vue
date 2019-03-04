<template>
  <div class="app-box">
    <Header>
    </Header>
    <main>
        <router-view></router-view>
      </main>
      <TabBar></TabBar>
  </div>
</template>

<script>
import Header from 'components/layout/Header'
import TabBar from 'components/layout/TabBar'
import Home from 'pages/Home'


export default {
  name: 'App',
  components: {
    Home,Header,TabBar
  }
}
</script>

<style lang="stylus" scoped>
  .app-box
    display flex
    height 100%
    flex-direction column
    position relative
    main
      flex 1
      height 100%
      width 100%
      position fixed
      top .505rem
</style>




