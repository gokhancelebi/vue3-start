<script setup>
const props = defineProps(['data'])
</script>
<template>
    <div class="container mx-auto">
        <slot></slot>
    </div>
</template>
<style scoped>
.container{
    max-width: 1150px;
    width: 100%;
}

</style>