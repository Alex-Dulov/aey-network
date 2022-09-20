<template>
  <aey-wrapper/>


<!--  <chanels msg="!!!1"/>-->
<!--  <div class="main">-->
<!--    <aey-header/>-->
<!--    <div class="container">-->
<!--      <router-view></router-view>-->
<!--    </div>-->
<!--    <div class="container">-->
<!--      <div class="chat"></div>-->
<!--      <form id="messageForm" action="#" @submit.prevent="onSubmit($event)">-->
<!--        <input type="text" name="name" id="name" v-model="name">-->
<!--        <input type="text" name="message" id="message" v-model="message">-->
<!--        <input type="submit" value="Submit">-->
<!--      </form>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import aeyWrapper from "./components/aey-wrapper.vue";
import { server2 } from "./mirage";

if (process.env.NODE_ENV === "development") {
  server2();
}

const ws = new WebSocket("ws://127.0.0.1:8888");

export default {
  name: 'App',
  components: {
    aeyWrapper,
  },

  data: () => ({
    name: "",
    message: "",
    messageData: [],
  }),

  methods: {
    onSubmit: function({name = this.name, message = this.message}) {
      ws.send(JSON.stringify({
        name,
        message
      }));
      return false;
    }
  },

  mounted() {
    // ws.addEventListener("open", function(event) {
    //   console.log("Connected to server", event)
    // });
    //
    // ws.addEventListener("message", function(event) {
    //   const messages = JSON.parse(event.data);
    //   messages.forEach((value) => {
    //     const messageElement =document.createElement("div");
    //     messageElement.appendChild(document.createTextNode(`${value.name}: ${value.message}`));
    //     document.querySelector(".chat").appendChild(messageElement);
    //   })
    // })
    // document.querySelector("#messageForm").addEventListener("submit", this.submit);
  }
}
</script>

<style>
</style>
