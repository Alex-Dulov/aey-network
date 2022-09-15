<template>
  <div class="profile container">
    <h1 class="profile__title">
      Profile: Login
    </h1>
    <div class="profile__photo"></div>
    <div class="profile__description">
      <p>
        Name: Firstname Lastname
      </p>
      <p>
        e-mail: --
      </p>
      <p>
        id: 0000
      </p>
      <p>
        Status:
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "aey-profile"
}
</script>

<style scoped>
.profile__title {
  margin-bottom: 32px;
}

.profile__photo {
  width: 640px;
  height: 640px;
  margin-right: auto;
  margin-bottom: 24px;
  background-color: #dddddd;
}



</style>