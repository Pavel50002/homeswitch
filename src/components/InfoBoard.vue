<template>
    <div class="main-body-infoboard">
        <div class="header-infoboard">Info board</div>
        <div class="body-infoboard">
            <ul>
                <li>тут можеть быть информация</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InfoBord"
    }
</script>

<style scoped>
    .main-body-infoboard {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
        background-color: #b9b5b5;
        width: 150px;
        height: 300px;
        right: 27px;
    }

    .header-infoaboard {
        width: 150px;
        height: 20px;
        background-color: #a4a0a0;
        display: flex;
    }
</style>