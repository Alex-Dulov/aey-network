<template>
  <h1>
    Users
  </h1>
  <aey-users-list v-for="user in users" :key="user.id" :users-data="user">

  </aey-users-list>
</template>

<script>
import {mapActions, mapState} from "vuex";
import aeyUsersList from "./aey-users-list"

export default {
  name: "aey-users",
  components: {
    aeyUsersList
  },
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState([
        "users"
    ])
  },
  methods: {
    ...mapActions([
      "FETCH_USERS"
    ])
  },
  mounted() {
    this.FETCH_USERS();
  }
}
</script>

<style scoped>

</style>