import Vue from 'vue'
Vue.filter('movieListImgReplace', (value, wh) => {
    return value.replace('w.h', wh)
})