<template>
    <div class="body-switch">
        <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>       <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>       <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>       <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>       <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>       <div>Info</div>
        <div>Info</div>
        <div>Info</div> <div>Info</div> <div>Info</div>
        <div>Info</div>
        <div>Info</div>
        <div>Info</div>
    </div>
</template>

<script>
    export default {
        name: "Info",

        methods: {
            checktoken(){
                if(localStorage.getItem('token') === null){
                    this.$router.push('/');
                }
            }
        },
        created(){
            this.checktoken();
        },
    }

</script>

<style scoped>

</style>