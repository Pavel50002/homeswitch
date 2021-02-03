<template>

    <div class="content-menu">
        <div class="logo-project">
            <img class="header-logo" src="../assets/img/switch-icon.jpg" alt="Switch"/>
            Switch Home
        </div>
        <ul style="padding: 1px 1px 1px 10px">

            <li class="content-menu-ul">
                <a @click="$router.push('/device')">
                <svg display="none">
                    <g>
                        <symbol id="iconDevice1" viewBox="0 -160 600 600">
                            <path
                                    d="M 570 0 L 30 0 C 13.433594 0 0 13.433594 0 30 L 0 210 C 0 226.566406 13.433594 240 30 240 L 62.191406 240 L 70.296875 272.421875 C 71.410156 276.875 75.410156 280 80 280 L 120 280 C 124.589844 280 128.589844 276.875 129.703125 272.421875 L 137.808594 240 L 462.191406 240 L 470.296875 272.421875 C 471.410156 276.875 475.410156 280 480 280 L 520 280 C 524.589844 280 528.589844 276.875 529.703125 272.421875 L 537.808594 240 L 570 240 C 586.566406 240 600 226.566406 600 210 L 600 30 C 600 13.433594 586.566406 0 570 0 Z M 112.191406 260 L 87.808594 260 L 82.808594 240 L 117.191406 240 Z M 512.191406 260 L 487.808594 260 L 482.808594 240 L 517.191406 240 Z M 580 210 C 580 215.523438 575.523438 220 570 220 L 30 220 C 24.476562 220 20 215.523438 20 210 L 20 30 C 20 24.476562 24.476562 20 30 20 L 570 20 C 575.523438 20 580 24.476562 580 30 Z M 580 210 "
                                 />
                            <path d="M 520 40 L 560 40 L 560 60 L 520 60 Z M 520 40 "
                                />
                            <path d="M 540 70 C 523.433594 70 510 83.433594 510 100 C 510 116.566406 523.433594 130 540 130 C 556.566406 130 570 116.566406 570 100 C 570 83.433594 556.566406 70 540 70 Z M 540 110 C 534.476562 110 530 105.523438 530 100 C 530 94.476562 534.476562 90 540 90 C 545.523438 90 550 94.476562 550 100 C 550 105.523438 545.523438 110 540 110 Z M 540 110 "
                                 />
                            <path d="M 110 100 L 50 100 C 44.476562 100 40 104.476562 40 110 L 40 170 C 40 175.523438 44.476562 180 50 180 L 110 180 C 115.523438 180 120 175.523438 120 170 L 120 110 C 120 104.476562 115.523438 100 110 100 Z M 100 160 L 60 160 L 60 120 L 100 120 Z M 100 160 "
                                  />
                            <path d="M 200 100 L 140 100 C 134.476562 100 130 104.476562 130 110 L 130 170 C 130 175.523438 134.476562 180 140 180 L 200 180 C 205.523438 180 210 175.523438 210 170 L 210 110 C 210 104.476562 205.523438 100 200 100 Z M 190 160 L 150 160 L 150 120 L 190 120 Z M 190 160 "
                                 />
                            <path d="M 290 100 L 230 100 C 224.476562 100 220 104.476562 220 110 L 220 170 C 220 175.523438 224.476562 180 230 180 L 290 180 C 295.523438 180 300 175.523438 300 170 L 300 110 C 300 104.476562 295.523438 100 290 100 Z M 280 160 L 240 160 L 240 120 L 280 120 Z M 280 160 "
                             />
                            <path d="M 380 100 L 320 100 C 314.476562 100 310 104.476562 310 110 L 310 170 C 310 175.523438 314.476562 180 320 180 L 380 180 C 385.523438 180 390 175.523438 390 170 L 390 110 C 390 104.476562 385.523438 100 380 100 Z M 370 160 L 330 160 L 330 120 L 370 120 Z M 370 160 "
                                 />
                            <path d="M 470 100 L 410 100 C 404.476562 100 400 104.476562 400 110 L 400 170 C 400 175.523438 404.476562 180 410 180 L 470 180 C 475.523438 180 480 175.523438 480 170 L 480 110 C 480 104.476562 475.523438 100 470 100 Z M 460 160 L 420 160 L 420 120 L 460 120 Z M 460 160 "
                                  />
                            </symbol>
                    </g>
                </svg>
                <svg class="iconDevice">
                    <use xlink:href="#iconDevice1"></use>
                </svg>
                <a class="item-button" @click="$router.push('/device')" style="padding: 0px 0px 0px 35px">Устройства</a>
                </a>
            </li>


            <li class="content-menu-ul">
                <a @click="$router.push('/info')">
                    <svg display="none">
                        <g>
                            <symbol id="iconInfo">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M16 1.5H4a.5.5 0 00-.5.5v1h13V2a.5.5 0 00-.5-.5zm2 1.768V2a2 2 0 00-2-2H4a2 2 0 00-2 2v1.268A2 2 0 001 5v3a1 1 0 00-1 1v6a3 3 0 003 3h14a3 3 0 003-3V7a1 1 0 00-1-1V5a2 2 0 00-1-1.732zM3 4.5h14a.5.5 0 01.5.5v1H9.243a3 3 0 00-2.122.879L6 8H2.5V5a.5.5 0 01.5-.5zm3.621 5l.44-.44 1.121-1.12a1.5 1.5 0 011.06-.44H18.5V15a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 15V9.5h5.121zM12 11.25h4v-1.5h-4v1.5z"></path>
                            </symbol>
                        </g>
                    </svg>
                    <svg class="iconFolder">
                        <use xlink:href="#iconInfo"></use>
                    </svg>
                    <a class="item-button" @click="$router.push('/info')" style="padding: 0px 0px 0px 35px">Info</a>
                </a>
            </li>
        </ul>
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



    .logo-project {
        white-space: nowrap; /*Не переносить текс на другую строку */
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #b9b5b5;
        font-family: Candara; /*Шрифт*/
        font-size: 20px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
        margin: 1px 5px 1px 0px;
    }

    .header-logo {
        width: 35px;
        margin: 5px 5px 5px 5px;
    }

    .content-menu-ul {
        margin: 5px 0px 0px 0px;
        display: flex;
        flex-direction: row;
        list-style-type: none; /* Убираем маркеры у списка */
    }

    .iconDevice {
        fill: #727675;
        cursor: pointer;
        position: fixed;
        width: 28px;
        height: 28px;
        padding: 0px 120px 0px 0px;
    }
    .iconDevice:hover{
        fill: white;
    }

    .iconFolder {
        fill: #727675;
        cursor: pointer;
        margin: 5px 5px 1px 1px;
        position: fixed;
        width: 25px;
        height: 25px;
        padding: 0px 120px 0px 0px;
    }

    .iconFolder:hover {
        fill: white;
    }

</style>
