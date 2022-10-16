<template>
  <div class="aey-wrapper">
    <div class="aey-wrapper__header">
      <aey-header />
    </div>
    <div class="aey-wrapper__sidebar">
      <aey-sidebar />
    </div>
    <div class="aey-wrapper__body">
      <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.path" />
      </router-view>
    </div>
  </div>
</template>

<script>
import aeyHeader from "../components/elements/aey-header";
import aeySidebar from "../components/elements/aey-sidebar";
export default {
  name: "aey-wrapper",
  components: {
    aeyHeader,
    aeySidebar
  }
}
</script>

<style scoped>
.aey-wrapper {
  display: grid;
  grid-auto-rows: 64px auto;
  height: 100vh;
}

.aey-wrapper__header {
  grid-area: header;
  background-color: #dddddd;
}

.aey-wrapper__sidebar {
  grid-area: sidebar;
  background-color: #eeeeee;
}

.aey-wrapper__body {
  grid-area: body;
}

@media screen and (min-width: 800px) {
  .aey-wrapper {
    grid-template-columns: 240px auto;
    grid-template-areas:
    "header header"
    "sidebar body"
  }
}

@media screen and (max-width: 799px) {
  .aey-wrapper {
    grid-template-columns: 1fr;
    grid-template-areas:
    "header"
    "body"
  }

  .aey-wrapper__sidebar {
    display: none;
  }
}
</style>