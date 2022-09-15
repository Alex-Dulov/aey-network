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
  async mounted() {
    const res = await fetch("/users.json");
    this.users = await res.json();
  }
}
</script>

<style scoped>

</style>