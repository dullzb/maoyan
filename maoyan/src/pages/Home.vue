<template>
  <div class="home-box">
    
    <div class="white-bg topbar-bg">
      <div class="city-entry">
        <span class="city-name">
          杭州
          <svg t="1550541118314"  viewBox="0 0 1707 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7914" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="6"><path d="M122.869341 2.22352 851.98782 0 1584.920784 6.472488C1629.474237 6.472488 1668.639278 8.883431 1681.652405 18.846672 1713.071326 42.900724 1709.638076 92.031136 1681.652405 119.893283L905.874092 969.356564C891.086834 984.207717 871.349905 990.556674 851.928185 989.602521 832.502205 990.558804 812.82704 984.207717 797.975887 969.356564L22.199706 119.895415C-5.722077 92.033265-8.769832 43.352245 22.199706 18.914826 36.607856 7.5523 61.684215 2.22352 122.869341 2.22352L122.869341 2.22352Z" p-id="7915"></path></svg>
        </span>
      </div>

      <div class="switch-hot">
        <router-link class="hot-item" tag = 'div' active-class = 'active' keep-alive to = '/movie/hot'>正在热映</router-link>
        <router-link class="hot-item" tag = 'div' active-class = 'active' keep-alive to = '/movie/coming'>即将上映</router-link>
      </div>
      <div class="search-entry">
        <!-- <router-link tag = 'svg' active-class = 'active' keep-alive to = '/movie/coming' t="1550540497315"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7118" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M938.64603 886.273219l-173.071777-173.074847c53.665247-63.987337 86.075401-146.400325 86.075401-236.446154 0-203.406666-164.895561-368.298134-368.301204-368.298134-203.409736 0-368.302227 164.892491-368.302227 368.298134 0 203.409736 164.892491 368.302227 368.302227 368.302227 89.246627 0 171.055864-31.767518 234.798631-84.579327l173.148525 173.148525c1.576915 1.576915 8.15575-2.443655 14.6957-8.979512l23.675212-23.675212C936.205445 894.428969 940.222945 887.850134 938.64603 886.273219zM483.347426 778.093381c-166.425404 0-301.338093-134.912689-301.338093-301.338093s134.912689-301.338093 301.338093-301.338093S784.685519 310.329884 784.685519 476.755288 649.773853 778.093381 483.347426 778.093381z" p-id="7119"></path></router-link> -->
        <svg t="1550540497315"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7118" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25"><path d="M938.64603 886.273219l-173.071777-173.074847c53.665247-63.987337 86.075401-146.400325 86.075401-236.446154 0-203.406666-164.895561-368.298134-368.301204-368.298134-203.409736 0-368.302227 164.892491-368.302227 368.298134 0 203.409736 164.892491 368.302227 368.302227 368.302227 89.246627 0 171.055864-31.767518 234.798631-84.579327l173.148525 173.148525c1.576915 1.576915 8.15575-2.443655 14.6957-8.979512l23.675212-23.675212C936.205445 894.428969 940.222945 887.850134 938.64603 886.273219zM483.347426 778.093381c-166.425404 0-301.338093-134.912689-301.338093-301.338093s134.912689-301.338093 301.338093-301.338093S784.685519 310.329884 784.685519 476.755288 649.773853 778.093381 483.347426 778.093381z" p-id="7119"></path></svg>

      </div>
    </div>

    <Movie></Movie>
    
  </div>
</template>

<script>
import Movie from 'pages/movies/Movie'
export default {
  components: {
    Movie
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/_base.styl'
@import '~styles/_border.styl'
.home-box
  display flex
  flex-direction column
  height 100%
  .topbar-bg
    height 0.44rem
    display  flex
    font-size .15rem
    broder 0 0 1px 0,#ccc
    position absolute
    top 0
    width 100%
    z-index 999
    
    .city-entry
      display flex
      flex 80
      padding-left .15rem
      align-items center

      span 
        margin-left .04rem
        color #666
      svg 
        color #999
    .switch-hot
      flex 210
      display  flex
      justify-content center
      align-items center
      &:after
        display none
      .hot-item
        height 100%
        flex 1
        font-weight bold
        color #666666
        text-align center
        line-height .44rem
        margin 0 .12rem
        &.active
          color $bg-color
          border-bottom 2px solid $bg-color
    .search-entry
      display flex
      flex 85
      padding-right .15rem
      justify-content flex-end
      align-items center
      svg
        fill $bg-color


</style>


