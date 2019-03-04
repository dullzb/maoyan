<template>
  <div class="topbar-box">
    <div class="white-bg topbar-bg">
      <div class="city-entry">
        <span class="city-name">
          杭州
          <svg t="1550541118314"  viewBox="0 0 1707 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7914" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="6"><path d="M122.869341 2.22352 851.98782 0 1584.920784 6.472488C1629.474237 6.472488 1668.639278 8.883431 1681.652405 18.846672 1713.071326 42.900724 1709.638076 92.031136 1681.652405 119.893283L905.874092 969.356564C891.086834 984.207717 871.349905 990.556674 851.928185 989.602521 832.502205 990.558804 812.82704 984.207717 797.975887 969.356564L22.199706 119.895415C-5.722077 92.033265-8.769832 43.352245 22.199706 18.914826 36.607856 7.5523 61.684215 2.22352 122.869341 2.22352L122.869341 2.22352Z" p-id="7915"></path></svg>
        </span>
      </div>
      <div class="search-entry search-input">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII=" alt="">
            <span>搜影院</span>
      </div>
    </div>

    
    
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
@import '~styles/_base.styl'
@import '~styles/_border.styl'
.topbar-box
  display flex
  flex-direction column
  
  .topbar-bg
    height 0.44rem
    display  flex
    font-size .15rem
    broder 0 0 1px 0,#ccc
    background #f5f5f5
    position absolute
    top 0
    width 100%
    z-index 999
    
    .city-entry
      display flex
      flex 80
      padding-left .15rem
      align-items center
      color #666
      height .2rem  
      span 
        margin-left .04rem
        color #666
        height 100%
      svg 
        color #999
    .search-input    
        width 75%
        display flex
        justify-content center
        align-items center
        height .28rem
        font-size .13rem
        border .05rem solid #e6e6e6
        border-radius .05rem
        span 
            font-size .13rem
            color #b2b2b2


</style>


