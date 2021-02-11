<template>
    <div class="header-content">
    <div class="content-body">
        <div class="content-header-user-sign-out">
            <div class="name-user">{{this.username}}</div>
            <div class="sign-out">
                <button class="sign-out" @click="signIn">Sign out</button>
            </div>
        </div>

    </div>
        <InfoBord class="infoboard"></InfoBord>
    </div>
</template>

<script>


    import routes from "@/routes";
    import InfoBord from "@/components/InfoBoard";

    export default {
        name: "HeadSwitch",
        components: {InfoBord},
        component: routes,
        props: ['checktokenvariable'],

        data() {
            return {
                username: '',
            }
        },
        mounted() {
            this.username = localStorage.getItem('nameuser')
        },
        methods: {
            signIn() {
                this.$emit('changevariablefalse', false)
                this.token = null;
                localStorage.clear();
                this.$router.push('/')


            },
            checktoken() {
                if (localStorage.getItem('token') === null) {
                    this.$router.push('/');
                }
            },
            created() {
                this.checktoken();
            },

        }
    }

</script>

<style scoped>

    .content-body {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: auto;
        height: 40px;
        background: #6e6669;
    }


    .name-user {
        margin: 5px;
        color: #483e3d;
        font-family: Candara; /*Шрифт*/
        font-size: 24px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .content-header-user-sign-out {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

    }

    .sign-out {
        margin: 20px;
        font-size: 17px;
        color: #a9a5a5;
        background: #6e6669;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .sign-out:hover {
        color: white;
        transition: 1s;
    }

</style>