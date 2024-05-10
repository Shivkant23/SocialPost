<template lang="">
    <div>
        <h1>Single Post Screen</h1>
            <p>Post ID: {{ $route.params.id }}</p>

    </div>
</template>
<script>
export default {
    name: 'singlePost',
    props: ['data'],

    mounted() {
        let data = this.$route.params.data;
        console.log("data is", data);
    }

    // props: true,

}
</script>
<style lang="">
    
</style>