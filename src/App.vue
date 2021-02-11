<template>
    <div class="apps" id="app" style="overflow: hidden">
        <div class="fetch">
            <transition name="transitionmenu">
                <div class="content-menu"
                     v-bind:class="{ move: showMenu, move1: !showMenu }"
                     v-bind:style="{width: openMenu + 'px'}"
                     v-if="checktokenvariable === true">
                    <div class="body-meny">
                        <Menu></Menu>
                    </div>
                    <transition>
                            <span class="open-menu" @click="showMenu = !showMenu"
                                  v-bind:style="{transform: 'rotate('+ this.revertArr +'deg)'}">
                            </span>
                    </transition>
                </div>
            </transition>
            <div class="header-body">
                <HeadSwitch v-if="checktokenvariable === true" @changevariablefalse="checktokenvariable = $event"
                            :checktokenvariabletrue="checktokenvariable"></HeadSwitch>

                <div class="body-head-2">
                    <InfoBoard class="infoboard"></InfoBoard>
                    <router-view class="vue" @changevariabletrue="checktokenvariable = $event"
                                 :checktokenvariable="checktokenvariable"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadSwitch from "@/components/HeadSwitch";
    import Menu from "@/components/Menu";




    export default {

        name: 'App',
        components: {


            Menu,
            HeadSwitch,

        },
        data() {
            return {
                showMenu: true,
                checktokenvariable: false,
                username: '',


            }
        },


        methods: {
            checktoken: function () {
                if (localStorage.getItem('token') !== null) {
                    this.$router.push('/device');
                } else {
                    this.checktokenvariable = false;
                }
            }
        },

        created() {
            this.checktoken();
        },
        computed: {
            revertArr: function () {
                let reversArrow1;
                if (this.showMenu) {
                    reversArrow1 = 45
                } else {
                    reversArrow1 = -135
                }
                return reversArrow1;
            },
            openMenu: function () {
                let openMenu1;
                if (this.showMenu) {
                    openMenu1 = 48
                } else {
                    openMenu1 = 200
                }
                return openMenu1;
            }
        },

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

    .header-body {
        width: 100%;
        position: inherit;
        z-index: 0;
        height: 40px;
    }

    .body-head-2 {
        position: relative;
        display: flex;
        flex-direction: row-reverse;
        width: 100%;


    }

    .vue {
        position: absolute;
        overflow-y: auto;
        height: 96vh;
        width: 100%;
        /*position: relative;*/
        display: flex;
        flex-direction: column;
        justify-content: start;
        /*height: 100vm;*/
        /*width: 100%;*/
        /*overflow-y: auto; !*Прокрутка*!*/
        transition: 1.5s;
        transform: translateX(0px);
    }

    .fetch {
        display: flex;
        flex-direction: row;
        justify-content: start;
        /*height: 100vh; !* Если используется шапка можно установить ~ 92vm*!*/
        width: 100vm;
        /*overflow-y: auto; !*Прокрутка*!*/
        /*margin: -0px 2px 2px 0px;*/
    }

    .content-menu {

        overflow: hidden; /* Убрать скролл */
        list-style-type: none; /* Убираем маркеры у списка */
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #3a3538;
        overflow-y: auto;
        z-index: 1;
        width: 100%;
    }


    .body-meny {
        width: 100%;
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .item-button {
        margin: 5px 0px 0px 5px;
        color: #907c7a;
        font-family: Candara; /*Шрифт*/
        font-size: 18px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
    }

    .open-menu {
        width: 15px;
        height: 15px;
        margin: 1px 1px 1px 10px;
        border-top: 8px solid white;
        border-right: 8px solid white;
        margin-right: 10px;
        transition: 1s;
        z-index: 3;
    }

    .only-body {

        z-index: -1;
    }

    .only-body:hover {
        overflow-y: auto;
    }

    .infoboard{
        flex-direction: column;
        align-items: revert;
        position: fixed;
    }

</style>
