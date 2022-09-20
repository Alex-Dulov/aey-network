<template>
  <h3>
    users list
  </h3>
  <div class="users-list">
    <div class="users-list" v-for="user in users" :key="user.id">
      <h4>{{user.login}}</h4>
      <p>{{user.id}}</p>
    </div>

  </div>

</template>

<script>
import axios from "axios";
import { api } from "../../api";

export default {
  name: "aey-users-list",
  data() {
    return {
      users: [],
    }
  },
  props: {
    // usersData: {
    //   type: Object,
    //   default: () => {}
    // }
  },
  // async mounted() {
  //   const res = await fetch("/users.json");
  //   this.users = await res.json();
  // },
  mounted() {
    axios.get({
      method: "get",
      url: api,
      responseType: 'stream'
    }).then(response => {
      console.log(response);
    }).catch(errors => {
      console.log(errors);
    }).finally(() => {})
  }
}
</script>

<style scoped>

</style>