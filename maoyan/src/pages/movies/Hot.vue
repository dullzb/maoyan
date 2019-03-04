<template>
    <div class="hot-box">
        <MovieList :resource='hotShowing'></MovieList>
    </div>
</template>


<script>
import MovieList from 'components/common/movies/MovieList'
import { Indicator } from 'mint-ui'
import http from 'utils/http'
export default {
    data(){
        return {
            hotShowing : null
        }
    },
    components: {
        MovieList,
    },
    async beforeCreate () {

        Indicator.open({
            text:'加载中...',
            spinnerType:'fading-circle'
        });

        this.hotShowing = await http({
            method:'get',
            url:'/ajax/movieOnInfoList'
        })
        Indicator.close()
    }
}
</script>

<style lang="stylus" scoped>
    .hot-box
        margin-top .5rem
</style>


