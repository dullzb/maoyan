<template>
    <div class="item" data-id="248906">
        <div class="main-block">
            <div class="avatar">
                <div class="default-img-bg">
                    <img :src="movie.img | movieListImgReplace('128.180')" alt="">
                </div>
            </div>

            <div class="mb-outline-b content-wrapper">
                <div class="column content">
                    <div class="box-flex movie-title">
                        <div class="title line-ellipsis v3dimax_title movie-name">
                            {{ movie.nm }}
                        </div>
                        <span class="version"
                            :class = '[movie.version]'
                        ></span>
                    </div>
                    <div class="detail column">
                        <div class="score line-ellipsis">
                            <span class="score-suffix">观众评 </span>
                            <span class="grade">
                                {{ movie.sc }}
                            </span>
                        </div>

                        <div class="actor line-ellipsis actor-name">主演: 
                            {{ movie.star }}
                        </div>
                        <div class="show-info line-ellipsis">今天161家影院放映3146场</div>
                    </div>
                </div>

                <movie-button :preshow = 'movie.preShow'></movie-button>
            </div>
        </div>
    </div>
</template>

<script>
import MovieButton from 'components/common/movies/MovieButton'
export default {
    props:{
        'movie':Object
    },

    components: {
        MovieButton
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/_border'
    @import '~styles/_ellipsis'
    .tab-content
        .list-wrap
            .item
                .content-wrapper
                    border 0 0 1px 0,#ccc
                    margin-right .14rem
                    .box-flex
                        display flex
                        .movie-name
                            ellipsis()
                    .detail
                        .actor-name
                            ellipsis()

</style>



