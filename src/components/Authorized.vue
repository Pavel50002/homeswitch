<template>
    <div v-if="!checktokenvariable" style="position: fixed">
        <div class="auth-head">Web Service Switch Home</div>
        <div class="auth">
            <div class="main-body-auth">
                <div class="head-auth-name">
                    <div>Autorization {{checktokenvariable}}</div>
                </div>
                <div class="bady-auth">
                    <input class="login" v-model="login" placeholder="login">
                    <input class="pass" v-model="password" placeholder="password">
                    <button class="siginIn" @click="login1">Sign in</button>
                    <div class="error-auth">{{resp}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import App from "@/App";


    export default {
        props: ['checktokenvariable'],
        name: "Authorized",
        component: App,
        data() {
            return {
                login: '',
                password: '',
                resp: ''

            }
        },

        methods: {
            login1: function () {

                axios
                    .post('/auth', {
                        "login": this.login,
                        "password": this.password
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(response => {
                            if (response.data.token !== null) {
                                localStorage.setItem('token', response.data.token);
                                 localStorage.setItem('nameuser', response.data.second_name + ' ' + response.data.name);
                            }else {
                                // this.resp =  localStorage.setItem('token', response.data.token)
                                this.resp = response.data.name
                            }
                        }
                    ).catch(err => console.log(err));

                console.log(localStorage.getItem('token'));
                setTimeout(this.checktoken, 2000)
            },

            checktoken() {
                if (localStorage.getItem('token') !== null ) {
                    this.$router.push('/device');
            }
        },
        created() {
            this.checktoken();
        }
    }}
</script>

<style scoped>
    .auth-head {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: Candara; /*Шрифт*/
        font-size: 40px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
        color: white;
        background-color: #414344;
        width: 100%;
        height: 40px;
    }

    .head-auth-name {
        width: 100%;
        height: 20px;
        background-color: #414344;
        font-family: Candara; /*Шрифт*/
        font-size: 15px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }


    .auth {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .main-body-auth {
        margin: 100px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 400px;
        height: 190px;
        background-color: #706c6c;
    }

    .bady-auth {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }

    .login {
        font-size: 17px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
        transition: 1.5s;
    }

    .login:hover {
        transform: scale(1.1);
    }

    .pass {
        font-size: 17px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
        transition: 1.5s;
    }

    .pass:hover {
        transform: scale(1.1);
    }

    .siginIn {
        margin: 20px;
        font-size: 17px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .siginIn:hover {
        color: white;
        transition: 1s;
    }
    .error-auth{
        font-size: 18px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
        color: #e80000;
    }
</style>