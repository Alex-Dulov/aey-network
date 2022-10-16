<template>
<div class="header">
  <div class="header__container">
    <div class="header__item">
      <a class="link link--bold link--white" href="/profile">AEY-Network</a>
    </div>
  </div>
</div>
</template>

<script>
// import AeyMenu from "@/components/elements/aey-menu";
export default {
  name: "aeyHeader",
  components: {}
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 8px 24px;
  background-color: #000000;
}

.header__container {
  display: flex;
  column-gap: 24px;
  align-items: center;
  justify-content: start;

  height: 100%;
}

.header__item {}
</style>