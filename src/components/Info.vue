<template>
    <div>Info</div>
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