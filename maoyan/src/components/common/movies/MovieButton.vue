<template>
    <div class="button-block" data-id="248906">
        <div class="btn"
            :class = '{"pre":preshow}'
        >
            <span class="fix">
                {{ preshow?'预售':'购票' }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        'preshow':  Boolean
    }
}
</script>




<style lang="stylus" scoped>
    .button-block
        padding-right .14rem
</style>

