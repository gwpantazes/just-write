<script setup lang="ts">
const emit = defineEmits<{
  (event: 'click'): void
}>()

const onClick = () => {
  emit('click')
}
</script>

<template>
  <button @click="onClick">Menu</button>
</template>
