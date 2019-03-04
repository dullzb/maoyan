<template>
    <div class="main-box">
        <MainNav></MainNav>
        <TheaList></TheaList>
    </div>
</template>

<script>
import MainNav from 'theatre/MainNav.vue'
import TheaList from 'theatre/TheaList'
export default {
    components : {
        MainNav,TheaList
    }
}
</script>

<style lang="stylus" scoped>
    .main-box
        margin-right .17rem
        height 100%
</style>


