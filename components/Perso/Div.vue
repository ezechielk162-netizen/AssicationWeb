<template>
    <div :class="`m-${props.marginValue ?? 4} pt-${props.paddingValue ?? 0}`">
    <slot/>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    marginValue:{
        type: Number
    },
    paddingValue:{
        type: Number
    }
})

</script>