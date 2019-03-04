<template>
    <div class="most-expected-box">
        <p class="title">近期最受期待</p>
        <div class="most-expected-list">
            <div class="swiper-container">
                <!-- <div class="swiper-wrapper  expected-item">
                    <div class="swiper-slide poster default-img-bg" v-for='banner in banners' :key='banner.id'>
                        <img :src="banner.src" alt="">
                    </div>
                </div> -->
                <div class="swiper-wrapper  expected-item"
                    v-for = 'mostexpected in data.coming'
                    :key = 'mostexpected.id'
                >
                    <div class="swiper-slide poster default-img-bg">
                        <img :src="mostexpected.img | movieListImgReplace('170.180230')">
                        <span class="wish-bg"></span>
                        <span class="wish">
                            <span class="wish-num">{{mostexpected.wish}}</span>人想看
                        </span>
                        <div class="toggle-wish">
                            <span>
                                <svg t="1551601611906" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2176" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M890.2 208.2c-91.8-91.9-242.1-91.9-334 0L544.4 220c-18.2 18.2-47.6 18.2-65.8 0l-11.8-11.8c-91.9-91.9-242.1-91.9-334 0C41 300 24.7 533.9 203.6 722.1 304 827.8 412.4 882.3 470 905.9c26.6 10.9 56.5 10.9 83 0 57.6-23.6 166-78.1 266.4-183.8 178.9-188.2 162.6-422 70.8-513.9z" p-id="2177" fill="#dbdbdb"></path></svg>
                            </span>
                        </div>
                        <h5 class="name line-ellipsis">{{mostexpected.nm}}</h5>
                        <p class="date">{{mostexpected.comingTitle}}</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import http from 'utils/http'
// import data from 'data/mostexpected.json'
import data from '../../data/mostexpected.json'
export default {
    data(){
        return{
            data
        }
    }
}
</script>

<style lang="stylus" scoped>
        .most-expected-box
            width 100%
            height 1.92rem
            margin-top .44rem
            margin-bottom .1rem
            padding .12rem 0 .12rem .15rem
            .title
                font-size .14rem
                color #333333
                margin 0 0 .12rem
            .most-expected-list
                overflow scroll
                white-space nowrap
                height 1.61rem
                .swiper-container
                    height 100%
                    .expected-item
                        display inline-block
                        width .85rem
                        overflow hidden
                        margin-right .1rem
                        height 100%
                        .poster
                            width .85rem
                            height 1.15rem
                            position relative            
                            margin-bottom .06rem
                            img
                                display inline-block
                                width 100%
                                height 100%
                            .wish
                                position absolute
                                left .04rem
                                bottom .02rem
                                font-size .11rem
                                color #faaf00
                                font-weight 600
                                width 100%
                                height .16rem
                            .toggle-wish
                                width .28rem
                                line-height .28rem
                                height .28rem
                                background rgba(61,63,71,.6)
                                text-align center
                                border-bottom-right-radius .1rem
                                position absolute
                                top 0
                                left 0
                            .name
                                font-size .13rem
                                color #222
                                margin-top .06rem
                            .line-ellipsis
                                text-overflow ellipsis
                                overflow hidden
                                white-space nowrap
                            .date
                                font-size .12rem
                                color #999
                                margin 0



</style>


