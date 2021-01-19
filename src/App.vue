<template>
  <div id="app">
<HeadSwitch></HeadSwitch>

    <Menu class="menu"></Menu>

  </div>
</template>

<script>


import HeadSwitch from "@/components/HeadSwitch";
import Menu from "@/components/Menu";
export default {
  name: 'App',
  components: {
    Menu,
      HeadSwitch

  }
}
</script>

<style>
.menu{
    position: absolute;
    width: 150px;
    height: 92%;
    background-color: #3a3538;
    overflow-y: auto; /*Прокрутка*/
    margin: -0px 2px 2px 0px;
}

</style>
