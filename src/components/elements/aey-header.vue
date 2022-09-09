<template>
<div class="header">
  <div class="header__container">
    <div class="header__item">
      --
    </div>

    <aey-menu/>

  </div>
</div>
</template>

<script>
import AeyMenu from "@/components/elements/aey-menu";
export default {
  name: "aeyHeader",
  components: {AeyMenu}
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 8px 24px;
  background-color: #ddd;
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