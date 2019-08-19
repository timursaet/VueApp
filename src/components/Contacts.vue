<template>
  <section class="contacts">
    <h2>{{contacts}}</h2>
    <p>{{FormName}}</p>
      <p>Введите имя: <input type="text" v-model="form.namePeople"></p>
      <p>Ваше сообщение: <input type="text" v-model="form.message"></p>
        <!-- <ul>
          <li v-for="(name, value) in form">
          {{value}}:{{name}}
          </li>
        </ul> -->
  </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      FormName: 'Напишите нам письмо',
      contacts: 'Контакты',
      form: {
        message: '',
        namePeople: ''
      }
    }
  }
}
</script>

<style>
.contacts {
  background-color: rgba(126, 102, 241, 1);
}
</style>
