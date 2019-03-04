import { Toast } from 'mint-ui'
import BScroll from 'better-scroll'
import http from 'utils/http'
import _ from 'lodash'


export const scroll = ({
    datas,
    el,
    method,
    url,
    movies,
    type
}) => {
    let count = 0
    let movieIds = datas && _.chunk(datas.movieIds.slice(12),16) || []
    let bScroll = new BScroll('el',{
        pullUpLoad:{
            threshold:50
        }
    })
            bScroll.on('pullingUp',async ()=>{
                if(count<movieIds.length){
                    let result = await http({
                        method,
                        url,
                        params:{
                            movieIds:movieIds[count].join(',')
                        }
                    }).then(res=>{
                        movies.push(...res.data[type])
                        bScroll.refresh()
                    })
                        .catch(err=>console.log(err))
                    bScroll.finishPullUp()
                    count++
                }else if(count ==  movieIds.length){
                    Toast({
                        message:'到底了~~',
                        position:'bottom',
                        duration:5000
                    })
                }
            }) 
}