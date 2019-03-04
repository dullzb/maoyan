<template>
    <div class="thealist-box">
        <div class="cinema-list">
            <div class="list-wrap">
                <div class="item mb-line-b"
                    v-for = 'items in data.cinemas'
                    :key = 'items.id'
                >
                    <div class="title-block box-flex middle">
                        <div class="title line-ellipsis">
                            <span>{{items.nm}}</span>
                            <span class="price-block">
                                <span class="price">{{items.sellPrice}}</span>
                                <span class="p">元起</span>
                            </span>
                        </div>

                        <div class="location-block box-flex">
                            <div class="flex line-ellipsis">{{items.addr}}</div>
                            <div class="distance">{{items.distance}}</div>
                        </div>

                        <div class="label-block">
                            <div class="snack">小吃</div>
                            <div class="vipTag">{{items.tag.vipTag}}</div>
                        </div>
                        <div class="discount-block">
                            <div>
                                <div class="discount-label normal card">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                                </div>
                                <div class="discount-label-text">开卡特惠，首单2张立减4元</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import data from '../../../data/cinemaList.json'

import BScroll from 'better-scroll'
export default {
    data(){
        return{
            data
        }
    },
    mounted () {
        this.scroll = new BScroll('.cinema-list',{
            pullUpLoad:{
                threshold:50
            }
        })
        this.scroll.on('pillingUp',()=>{
            this.scroll.finishPullUp()
        })
    }
}
</script>

<style lang="stylus" scoped>
    .thealist-box
        width 100%
        height 100%
        .cinema-list
            margin-bottom .55rem
            height 100%
            .list-wrap
                margin-top 0
                min-height 6.27rem
                .item
                    position relative
                    padding .13rem .15rem .13rem 0
                    margin-left .15rem
                    overflow hidden
                    border-bottom .01rem solid #e8e8e8
                    .title-block
                        display block
                        line-height 1.5
                        align-items center
                        .title
                            height .23rem
                            line-height .23rem
                            font-size .16rem
                            color #000
                            .price-block
                                padding-top .09rem
                                padding-left .03rem
                                line-height 1.5
                                .price
                                    font-size .18rem
                                    color #f03d37
                                .p
                                    font-size .11rem
                                    color #f03d37
                                    margin-left .03rem
                    .location-block
                        display flex
                        font-size .13rem
                        margin-top .06rem
                        color #666
                        justify-content space-between
                        .distance
                            margin-left .05rem                    
                    .label-block
                        height .17rem
                        line-height .17rem
                        margin-top .04rem
                        margin-bottom .04rem
                        font-size 0
                        flex-shrink 0
                        div
                            display inline-block
                            padding 0 .03rem
                            height .15rem
                            line-height .15rem
                            border-radius .02rem
                            font-size .06rem
                            color #f90
                            border .01rem solid #f90
                            &.vipTag
                                margin-left .05rem
                    .discount-block
                        color #999
                        margin-bottom .04rem
                        div
                            display flex
                            .discount-label
                                width .15rem
                                height .14rem
                                position relative
                                top .03rem
                                
                                img 
                                    width 100%
                                .discount-label-text
                                    margin-left 0
                                    font-size .11rem    



</style>


