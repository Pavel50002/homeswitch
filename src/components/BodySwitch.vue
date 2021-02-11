<template>
    <div>

        <div v-if="errorGetDevices === ''">

            <!--            Добавление Устройства-->
            <div class="add-device-content">
                <button @click="adddevice = !adddevice, ClearAddWindows()" class="add-device-menu-button">Add Device {{this.showMenu}}
                </button>
                <transition name="opacity-device">
                    <div v-if="adddevice" class="opacity-device">
                        <div class="main-body-element" style="height: auto">
                            <div class="head-element">
                                <div></div>
                                <div></div>
                                Form add device
                                <button class="add-device-button" @click="PostDevice()">Add</button>
                            </div>

                            <div class="partly-body-element">
                                <input v-model="ip" class="add-device-inputs" placeholder="Ip"><br>
                                <input v-model="room" class="add-device-inputs" placeholder="Room"><br>
                                <input v-model="description" class="add-device-inputs" placeholder="Description"><br>
                                <input v-model="how_much_to_work" class="add-device-inputs" placeholder="How much to work" @input="Hour_to_millisecond"><br>
                            </div>
                            <div if v-if="errorPostDevices !== ''">
                                {{errorPostDevices}}
                            </div>
                            <div v-else-if="responsePostDevice !== ''" style="color: green">
                                Device with id {{responsePostDevice.id}} passed added
                            </div>
                        </div>

                    </div>
                </transition>
            </div>

            <!--//Отображение устройства-->
            <transition-group
                    name="list-complete" tag="a"
            >
            <a v-for="(item)  in devices" :key="item.id"  class="list-complete-item" >
                <div class="main-body-element">
                    <div class="head-element">
                        <button @click="DeleteDevice(item.id)" class="delete-device">X</button>
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
                    <div style="color: red" v-if="errorDeleteDevices !== ''">
                        {{errorDeleteDevices}}
                    </div>
                </div>
            </a>
            </transition-group>

        </div>
        <div v-else>{{errorGetDevices}}</div>
    </div>
</template>

<script>


    import App from "@/App";
    import axios from "axios";





    export default {
        props: ["checktokenvariable", "showMenu"],
        name: "BodySwitch",
        component: App,

        data() {
            return {
                devices: [],
                errorGetDevices: '',
                adddevice: false,


                ip: "",
                room: "",
                description: "",
                how_much_to_work: "",

                responsePostDevice: '',
                errorPostDevices: "",
                errorDeleteDevices: ''
            }
        },
        computed: {
            Hour_to_millisecond() {
                let htm = 0;
                htm = this.how_much_to_work * 60 * 60 * 1000;
                return htm
            },

        },

        methods: {
            ClearAddWindows() {
                this.responsePostDevice = ''
            },

            CheckToken() {
                if (localStorage.getItem('token') === null) {
                    this.$router.push('/');
                } else {
                    this.$emit('changevariabletrue', true)
                }
            },

            GetDevice() {
                axios
                    //"/stubdevice"
                    .get("/alldevice", {
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
                        this.errorGetDevices = 'Сервис недоступен ' + error;

                    })
            },

            PostDevice: function () {

                axios
                    //"/stubdevice"
                    .post("/device", {
                            "ip": this.ip,
                            "room": this.room,
                            "description": this.description,
                            "how_much_to_work": this.Hour_to_millisecond
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': '*/*',
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            },
                        }
                    )
                    .then(response => {
                            this.responsePostDevice = response.data;
                        }
                    )
                    .catch(error => {
                        console.log(error);
                        this.errorPostDevices = 'Сервис упал ' + error;

                    })
                    .finally(() => (
                        this.GetDevice(),
                            this.ip = null,
                            this.room = null,
                            this.description = null,
                            this.how_much_to_work = null
                    ))

            },
            DeleteDevice(id) {
                axios
                    .delete("/deldevice", {
                        params: {
                            'id': id
                        },
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': '*/*',
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    })
                    .then(resp => {
                        console.log(resp)
                    })
                    .catch(error => {
                        this.errorDeleteDevices = 'Сервис упал ' + error;
                    })
                    .finally(() => (
                     this.remove(id),
                        console.log(id)
                    ))

            },

            remove: function (device_id) {
                this.devices = this.devices.filter(({id}) => id !== device_id);
            },


        },



        created() {
            this.CheckToken();
            this.GetDevice();


        },

    }
</script>

<style scoped>

    .list-complete-item {
        transition:  1s;
        display: flex;
        margin-right: 15px;
    }

    .list-complete-enter, .list-complete-leave-to
   {
        opacity: 0;
        transform: translateX(130px);
    }
    .list-complete-leave-active {
        position: absolute;
    }


    /*.body-switch {*/
    /*    position: relative;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: start;*/
    /*    height: 100vm;*/
    /*    !*width: 100%;*!*/
    /*    overflow-y: auto; !*Прокрутка*!*/
    /*    transition: 1.5s;*/
    /*    transform: translateX(0px);*/
    /*}*/

    .main-body-element {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 150px;
        background-color: #b0a2a7;
        padding: 3px;
    }

    .main-body-element-leave-active,
    .main-body-element-enter-active {
        transition: all 50ms;
        transform: translateX(0px);
    }

    .main-body-element-enter, .transitionmenu-leave-to {
        transform: translateX(-300px);
    }

    .head-element {
        width: auto;
        height: 30px;
        background-color: #bfabb7;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .head-element:hover {
        color: white;
        transition: 1s;
    }

    .delete-device {
        margin: 20px;
        font-size: 15px;
        width: 30px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .delete-device:hover {
        color: white;
        transition: 1s;
    }

    .partly-body-element {
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

    .is_online {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .open {
        margin: 20px;
        font-size: 15px;
        width: 70px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .open:hover {
        color: white;
        transition: 1s;
    }

    .add-device-content {
        display: flex;
        flex-direction: column;
        margin: 5px;

    }

    .add-device-menu-button {
        margin: 20px;
        font-size: 15px;
        width: 150px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .add-device-menu-button:hover {
        color: white;
        transition: 1s;
    }

    .opacity-device {
        transition: 1s;
        margin: 10px 10px 30px 10px;
    }

    .opacity-device-enter-active, .opacity-device-leave-active {
        transition: opacity .5s;
    }

    .opacity-device-enter, .opacity-device-leave-to
    {
        opacity: 0;
    }

    .add-device-inputs {
        font-size: 15px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
        transition: 1.5s;
    }

    .add-device-button {
        margin: 20px;
        font-size: 15px;
        width: 70px;
        color: #a9a5a5;
        background: #5a5d5a;
        padding: 3px;
        margin: 5px;
        font-family: Candara; /*Шрифт*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .add-device-button:hover {
        color: white;
        transition: 1s;
    }


</style>