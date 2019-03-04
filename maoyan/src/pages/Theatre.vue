<template>
    <div class="theatre-box">
        <TopBar></TopBar>
        <Main></Main>
    </div>
</template>

<script>

import TopBar from 'components/common/theatre/TopBar'
import Main from 'components/common/theatre/Main'

export default {
    components: {
        TopBar,Main
    }
}
</script>

<style lang="stylus" scoped>
    .theatre-box
        margin-top .4rem
        height 4.88rem
</style>


