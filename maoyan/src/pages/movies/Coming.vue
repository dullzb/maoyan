<template>
    <div class="coming-box">
        <MostExpected :most-expected = 'mostExpected'></MostExpected>
        <MovieList :resource='comingResource'></MovieList>
    </div>
</template>


<script>
import MovieList from 'components/common/movies/MovieList'
import MostExpected from 'pages/movies/MostExpected'

import {mapActions,mapGetters} from 'vuex'

export default {
    data(){
        return{
            mostExpected:null
        }
    },
    computed: {
        ...mapGetters(['comingResource'])
    },
    methods: {
        ...mapActions(['getComing','getExpected'])
    },
    created () {
        this.getComing()
        this.getExpected()
        
        // this.mostExpected = await http({
        //     method:'get',
        //     url:'/ajax/mostExpected',
        //     params:{
        //         ci:50,
        //         limit:10,
        //         offset:10,
        //         token:''
        //     }
        // })
        // console.log(this)
    },
    components: {
        MovieList,MostExpected
    }
}
</script>
