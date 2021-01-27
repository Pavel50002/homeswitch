<template>
    <div id="app">
        <HeadSwitch></HeadSwitch>
        <div class="fetch">
            <transition name="transitionmenu">
                <!--            <Menu class="menu" v-bind:class="{ move: showMenu, move1: !showMenu }">-->
                <!--            </Menu>-->
                <div class="content-menu"
                     v-bind:class="{ move: showMenu, move1: !showMenu }"
                     v-bind:style="{width: widthh + 'px'}">
                    <div class="body-meny">
                        <ul>
                            <li>
                                <a class="item-button" href="/device">Устройства</a>
                            </li>
                            <li>
                                <a class="item-button" href="/device">Info</a>
                            </li>
                        </ul>
                        <button class="open-menu" @click="showMenu = !showMenu">menu</button>
                        <div style="color: red">{{showMenu}}</div>
                        <div>{{widthh}}</div>
                    </div>
                </div>
            </transition>
            <BodySwitch class="body-switch"></BodySwitch>
        </div>
    </div>
</template>
<script>


    import HeadSwitch from "@/components/HeadSwitch";
    // import Menu from "@/Menu";
    import BodySwitch from "@/components/Body-Switch";

    export default {
        // props: {
        //   showMenu: Boolean
        // },

        name: 'App',
        components: {
            BodySwitch,
            // Menu,
            HeadSwitch
        },
        data() {
            return {
                showMenu: true,
                widthh: 0,

            }
        },

        methods: {
            // fas() {
            //     if (this.showMenu === true) {
            //         this.widthh = 40;
            //     } else {
            //         this.widthh  = + 70;
            //     }
            // }
        },

        mounted() { //Хук жизненого цикла
            setInterval(() => {
                if (this.showMenu === true) {
                    this.widthh = 48;
                } else {
                    this.widthh  = + 190;
                }
            }, 1000);


        }
    }
</script>

<style>

    /*--------------Menu---------------*/

    .transitionmenu-leave-active,
    .transitionmenu-enter-active {
        transition: all 50ms;
        transform: translateX(0px);
    }

    .transitionmenu-enter, .transitionmenu-leave-to {
        transform: translateX(-300px);
    }

    .move {
        transition: all 0.5s ease-out;
        transform: translateX(0%);
    }

    .move1 {
        transition: all 0.5s ease-out;
        transform: translate(0%, 0);
    }

    /*-----------------------------*/


    .fetch {
        display: flex;
        flex-direction: row;
        justify-content: start;
        height: 92vh;
        width: 100vm;
        overflow-y: auto; /*Прокрутка*/
        margin: -0px 2px 2px 0px;
    }

    .content-menu {
        overflow: hidden;
        display: flex;
        height: 100%;
        background-color: #3a3538;
        overflow-y: auto;

    }

    .body-switch {
        display: flex;
        flex-direction: row;
        justify-content: start;
        height: 100%;
        width: 100%;
        overflow-y: auto; /*Прокрутка*/
    }

    .body-meny {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .item-button {
        margin: 5px;
        color: #907c7a;
        font-family: Candara; /*Шрифт*/
        font-size: 18px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .open-menu {
        width: 50px;
        height: 20px;
    }
</style>
