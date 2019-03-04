<template>
    <div class="l-tabbar-box">
        <div id="login">
            <div class="nav">
                <ul class="taba taban samfix noslide">
                    <li class="active">
                        <a class="react">美团账号登录</a>
                    </li>
                    <li>
                        <a class="react">手机验证登录</a>
                    </li>
                </ul>
                <div class="slide"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.l-tabbar-box
    width 100%
    height 1.6rem
    #login
        width 100%
        height 100%
        position relative
        .nav
            width 100%
            height .42rem
            position absolute
            top 0
            
            .taba
                display flex
                justify-content space-between
                align-items center
                height 100%
                padding-left .1rem
                padding-right .1rem
                position relative
                border-bottom .04rem solid #d6d6d6
                li
                    display inline-block
                    width 50%
                    &.active
                        color #df2d2d
                    a.react
                        display block
                        color inherit
                        padding-top .14rem
                        padding-bottom .1rem
                        font-size 0.15rem   
            .slide
                position absolute
                bottom -.04rem
                border-bottom .04rem solid #df2d2d
                width 1.75rem
                height .04rem             


</style>


