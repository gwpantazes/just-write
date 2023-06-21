<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">
      <h1>BIPPITY BOO</h1>
    </RouterLink>
    <MenuButton class="menu"></MenuButton>
  </header>
</template>

<style scoped>
header {
  display: flex;
  border: inset;
}

.menu {
  align-self: flex-end;
}
</style>
