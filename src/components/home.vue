<template>
 <section class="brands">
  <!-- <img src="../assets/my.jpg" class="foto"> -->
    <h2>{{my}}</h2>
</section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      my: 'Я Саетгареев Тимур Рустамович'
    }
  }
}
</script>

<style>
.brands {
  background-color: blue;
}
.foto {
  width: 350px;
  height:500px;
  float:left;
}
</style>
