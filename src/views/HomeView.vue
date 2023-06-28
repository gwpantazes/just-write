<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Home</h1>
  <RouterLink to="/session">New Writing Session</RouterLink>

  <div id="streak">
    <h2>Streak: 0?</h2>
    <p>Placeholder...</p>
  </div>

  <div id="sessions">
    <h2>Sessions</h2>
    <p>Placeholder...</p>
  </div>
</template>
