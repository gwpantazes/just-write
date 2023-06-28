<script setup lang="ts">
import HamburgerIcon from '@/assets/Hamburger_icon.svg'

const emit = defineEmits<{
  (event: 'click'): void
}>()

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button name="menu" @click="onClick">
    Menu
    <HamburgerIcon />
  </button>
</template>

<style scoped>
button {
  font-size: 2rem;
  text-align: center;

  width: 3rem;
  height: 3rem;
  padding: 5px;
  margin: 2px;
}
</style>
