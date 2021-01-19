<template>
    <div class="content-body">
        <div class="name-project">
            <img class="header-logo" src="../assets/img/switch-icon.jpg" alt="Switch"/>
            Switch Home
        </div>
        <div class="content-header-user-sign-out">
            <div class="name-user">Ершов Павел</div>
            <div class="sign-out">
                <button>Sign out</button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "HeadSwitch"
    }

</script>

<style scoped>

    .content-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: auto;
        height: 50px;
        background: #6e6669;
    }

    .name-project {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;
        color: #483e3d;
        font-family: Candara; /*Шрифт*/
        font-size: 24px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
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
    .header-logo{
        width: 35px;
        margin: 5px;
    }
</style>