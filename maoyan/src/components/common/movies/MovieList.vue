<template>
    <div class="app-movie-list">
        <div class="page-wrap">
            <div class="tab-block">
                <div class="tab-content">
                    <div class="page n-hot active">
                        <div class="list-wrap">
                            <movie-item 
                                v-for = 'movie in movies'
                                :key = 'movie.id'
                                :movie = 'movie'
                            ></movie-item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script src="../../dist/js/swiper.js"></script>


<script>
import MovieItem from 'components/common/movies/MovieItem'

// import { scroll } from 'utils/scroll'
import { Toast } from 'mint-ui'
import BScroll from 'better-scroll'
import http from 'utils/http'
import _ from 'lodash'

export default {

    props: {
        'resource':Object
    },
    data(){
        return {
            count:0,
            movies: []
        }
    },
    components: {
        MovieItem
    },
    watch: {
      resource(){

          if( this.$route.name === 'hot' ){
              this.movies = this.resource && this.resource.movieList || []
          }else{
              this.movies = this.resource && this.resource.coming || []
          }


          
          let movieIds = this.resource && _.chunk(this.resource.movieIds.slice(12),16) || []
          this.scroll = new BScroll('.page',{
                pullUpLoad:{
                    threshold:50
                }
            })
            this.scroll.on('pullingUp',async ()=>{
                if(this.count<movieIds.length){
                    let result = await http({
                        method: 'get',
                        url: '/ajax/moreComingList',
                        params:{
                            token:'',
                            movieIds:movieIds[this.count].join(',')
                        }
                    }).then(res=>{
                        this.movies.push(...res.coming)
                    })
                        .catch(err=>console.log(err))
                    this.scroll.finishPullUp()
                    this.count++
                    
                }else if(this.count ==  movieIds.length){
                    Toast({
                        message:'到底了~~',
                        position:'bottom',
                        duration:5000
                    })
                }
                
            })
        // scroll = ({
        //     datas:this.hotShowing,
        //     el:'.page',
        //     method:'get',
        //     url:'/ajax/moreComingList',
        //     movies:this.movies,
        //     type:'coming'
        // })
      }  
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/movie-list.css'
.app-movie-list
    height 5.245rem 
    overflow hidden
    .page-wrap 
      height 100%
      overflow hidden
      .tab-block 
        height 100%
        overflow hidden
        .tab-content
          height 100%
          overflow hidden
          .page 
            position static
            height 100%
</style>


