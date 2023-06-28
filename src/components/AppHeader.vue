<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MenuButton from './MenuButton.vue';
import WriteNowQuillIcon from '@/assets/write-now-quill.svg'
</script>

<template>
  <header>
    <div>
      <WriteNowQuillIcon class="logo" alt="The Write Now Quill" />
      <RouterLink to="/">
        <h1>Write Now</h1>
      </RouterLink>
    </div>

    <MenuButton class="menu"></MenuButton>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ridge 5px;
  margin: 1px;
  padding: 10px;
}

h1 {
  display: inline-block;
}

header>div:first-child {
  display: inline-flex;
  align-items: center;
  flex-grow: 1;
}

svg {
  height: 3rem;
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
}

.menu {
  margin: 2px;
  height: 100%;

}
</style>
