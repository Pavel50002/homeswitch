<template>

    <div class="content-menu">
<!--        <div class="body-meny">-->
        <!--            <ul>-->
        <!--                <li>-->
        <!--                    <a class="item-button" href="/device">Устройства</a>-->
        <!--                </li>-->
        <!--                <li>-->
        <!--                    <a class="item-button" href="/device">Info</a>-->
        <!--                </li>-->
        <!--            </ul>-->
        <!--            <button class="open-menu" @click="this.showMenu = !this.showMenu">menu</button>-->
        <!--            <div>{{this.showMenu}}</div>-->
        <!--        </div>-->

    </div>

</template>

<script>
    import App from "@/App";

    export default {
         // props: ['showMenu'],
        component: {
            App
        },
        data: function () {
            return {
                // showMenu: true
            }
        },
        methods: {
            // updateLenghtMenu() {
            //     if (this.showMenu === true) {
            //         this.widthh = window.innerWidth + 110;
            //     } else {
            //         this.widthh = window.innerWidth - 110
            //     }
            // }


        }
    }
</script>


<style scoped>


    /*.body-meny {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    justify-content: start;*/
    /*}*/

    /*.item-button {*/
    /*    margin: 5px;*/
    /*    color: #907c7a;*/
    /*    font-family: Candara; !*Шрифт*!*/
    /*    font-size: 18px; !*Размер текста*!*/
    /*    font-weight: 800; !*Насыщенность шрифта*!*/
    /*}*/

    /*.open-menu {*/
    /*    width: 50px;*/
    /*    height: 20px;*/
    /*}*/
</style>
