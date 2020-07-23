<template>
    <div class="custom-cursor" :style="'top:'+ top + 'px; left:' + left + 'px;' "></div>
</template>

<script>
export default {
    name: 'custom-cursor',
    props: ['top', 'left'],
   
}
</script>