

import * as type from './type'

const mutations = {
    [type.GETCOMING](state,action){
        state.comingData = action.data
    },
    [type.GETEXPECTED](state,action){
        state.comingExpectedData = action.data
    }
}

export default mutations