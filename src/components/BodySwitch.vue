<template>
    <div class="body-switch">

        <div v-for="(item, index)  in devices" :key="index" v-bind:index="index" class="element">

            <div class="main-body-element">
                <div class="head-element">
                    <div></div>
                    <div></div>
                    {{item.description}}
                    <button v-if="item.is_online" class="open">OFF</button>
                    <button v-else class="open">ON</button>
                </div>

                <div class="partly-body-element">
                    Id: {{item.id}} <br>
                    Ip: {{item.ip}} <br>
                    Room: {{item.room}}<br>
                    How much to work: {{item.how_much_to_work / 60 / 60 / 1000}} hour<br>
                    <div class="is_online">
                    is_online: {{item.is_online}}
                    <div v-if="item.is_online === true"
                         style="background-color: #65ff00" class="online">
                        <div class="online1"></div>
                    </div>
                    <div v-else style="background-color: red" class="online">
                        <div class="online1"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    import App from "@/App";
    import axios from "axios"


    export default {
        props: ["checktokenvariable"],
        name: "BodySwitch",
        component: App,

        data() {
            return {
                devices: [],
            }
        },

        methods: {
            checktoken() {
                if (localStorage.getItem('token') === null) {
                    this.$router.push('/');
                }else {
                    this.$emit('changevariabletrue' , true)
                }
            },

            getdevice: function () {

                axios
                    .get("/stubdevice", {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': '*/*',
                             'Authorization': 'Bearer ' + localStorage.getItem('token')
                        },

                    },)
                    .then(response => {
                            this.devices = response.data.data.devices;
                        }
                    )
                    .catch(error => {
                        console.log(error);
                        this.error = 'Сервис упал =( ' + error;

                    })

            },




        },
        created() {
            this.checktoken();
            this.getdevice();


        },

    }
</script>

<style scoped>
    .element{
        margin: 15px;
    }
    .body-switch {
        margin: 30px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        height: 100vm;
        width: 100%;
        overflow-y: auto; /*Прокрутка*/
    }
    .main-body-element{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 150px;
        background-color: #b0a2a7;
        padding: 3px;


    }
    .head-element{
        width: auto;
        height: 30px;
        background-color: #bfabb7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }
    .head-element:hover{
        color: white;
        transition: 1s;
    }
    .partly-body-element{
        width: auto;
        height: auto;
        background-color: #3a3538;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
        font-size: 17px;
        color: #b9b5b5;
    }
    .online {
        display: flex;
        justify-content: end;
        margin: 6px 5px 5px 5px;
        width: 8px;
        height: 8px;
        left: 10px;
        border-radius: 50%;
    }

    .online1 {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: #e2e2e2 solid 1px;
    }
    .is_online{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .open{
        margin: 20px;
        font-size: 15px;
        width: 70px ;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }
    .open:hover{
        color: white;
        transition: 1s;
    }
</style>