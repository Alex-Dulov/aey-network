<template>
  <div class="sidebar">
    <div class="sidebar__menu">
      <a class="link link--bold link--black" href="/profile">Моя страница</a>
      <a class="link link--bold link--black" href="/news">Новости</a>
      <a class="link link--bold link--black" href="/chats">Общение</a>
      <a class="link link--bold link--black" href="/groups">Сообщества</a>
      <a class="link link--bold link--black" href="/users">Пользователи</a>
      <a class="link link--bold link--black" href="/settings">Настройки</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "aey-sidebar"
}
</script>

<style scoped>
.sidebar__menu {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
}
</style>