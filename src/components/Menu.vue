<template>
 <div class="content-menu">
<div class="body-meny">
<ul>
  <li>
    <a class="item-button" href="/device">Устройства</a>
  </li>
    <li>
        <a class="item-button" href="/device">Info</a>
    </li>
</ul>
</div>
 </div>
</template>

<script>
export default {

  props: {
    msg: String
  }
}
</script>

<style scoped>
.body-meny {
    width: 80%;
    height: inherit;
    display: flex;
    flex-direction: column;
    /*flex-wrap: wrap;*/
    justify-content: start;
    margin: 10px 2px 2px 2px;
}
    .item-button{
        margin: 5px;
        color: #907c7a;
        font-family: Candara; /*Шрифт*/
        font-size: 24px; /*Размер текста*/
        font-weight: 800; /*Насыщенность шрифта*/
    }
</style>
