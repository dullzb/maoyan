

import http from 'utils/http'
import * as type from './type'


const actions = {
    getComing({commit}){
        http({
            url:'/ajax/comingList',
            method:'get',
            params:{
                ci:50,
                token:'',
                limit:10
            }
        }).then(  res=>{
            console.log(res)
            let action = {
                type:type.GETCOMING,
                data:res
            }
            commit( action )
        }).catch( error =>console.log(error))
    },
    getExpected({commit}){
        http({
            url:'/ajax/mostExpected',
            method:'get',
            params:{
                ci:50,
                limit:10,
                offset:0,
                token:'',
                
            }
        }).then(  res=>{
            console.log(res)
            let action = {
                type:type.GETEXPECTED,
                data:res
            }
            commit( action )
        }).catch( error =>console.log(error))
    },
}


export default actions
