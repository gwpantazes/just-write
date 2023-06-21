<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { isError } from '../types/guard'

const props = defineProps<{
  sessionId: string
}>()

enum LoadState {
  LOADED,
  LOADING,
  ERROR
}

enum SaveState {
  SAVED,
  SAVING,
  ERROR
}

const retrieveDataFromLocalStorage = async () => {
  return window.localStorage.getItem(props.sessionId)
}

const text = ref<string | null>(null)
const saveState = ref(SaveState.SAVED)
const saveErrorMessage = ref<string | null>(null)
const loadState = ref(LoadState.LOADING)
const loadErrorMessage = ref<string | null>(null)

onBeforeMount(async () => {
  try {
    text.value = await retrieveDataFromLocalStorage()
    loadState.value = LoadState.LOADED
  } catch (error) {
    loadState.value = LoadState.ERROR
    loadErrorMessage.value = isError(error)
      ? error.message
      : error != null
      ? error.toString()
      : null
    console.error(error)
  }
})

const wordCount = computed(() => {
  const wordCount = ((text.value || '').match(/\w+/g) || []).length
  return wordCount
})

const logChange = (event: unknown) => {
  try {
    saveState.value = SaveState.SAVING
    window.localStorage.setItem(props.sessionId, text.value || '')
    saveState.value = SaveState.SAVED
  } catch (error) {
    saveState.value = SaveState.ERROR
    saveErrorMessage.value = isError(error)
      ? error.message
      : error != null
      ? error.toString()
      : null
    console.error(error)
  }
}
</script>

<template>
  <main>
    <label for="writing-area">Write something:</label>

    <textarea
      :disabled="loadState != LoadState.LOADED"
      v-model="text"
      v-on:input="logChange"
      id="writing-area"
      name="writing-area"
      rows="30"
      min-rows="2"
      cols="80"
      placeholder="It was a dark and stormy night..."
      spellcheck="true"
    ></textarea>

    <p>
      <span>Word count: {{ wordCount }}</span>

      <span class="separator"></span>

      <!-- TODO INTRODUCE LOADING STATE INDICATOR COMPONENT -->
      <span v-if="loadState == LoadState.LOADED" class="muted">Loaded</span>
      <span v-else-if="loadState == LoadState.LOADING" class="muted">Loading...</span>
      <span v-else-if="loadState == LoadState.ERROR" class="error">Load Error</span>

      <span class="separator"></span>

      <!-- TODO EXTRACT INTO SAVE STATE INDICATOR COMPONENT -->
      <span v-if="saveState == SaveState.SAVED" class="muted">Saved</span>
      <span v-else-if="saveState == SaveState.SAVING" class="muted">Saving...</span>
      <span v-else-if="saveState == SaveState.ERROR" class="error">Save Error</span>
    </p>

    <p v-if="loadState == LoadState.ERROR" class="error">
      Load Error - See console for details. <code>{{ loadErrorMessage }}</code>
    </p>
    <p v-if="saveState == SaveState.ERROR" class="error">
      Save Error - See console for details. <code>{{ saveErrorMessage }}</code>
    </p>

    <div>
      You have written:
      <p class="text">{{ text }}</p>
    </div>
  </main>
</template>

<style scoped>
textarea {
  resize: vertical;
  min-height: 2lh;
}

.text {
  white-space: pre-line;
  padding: 1lh;
  background-color: gray;
}

.muted {
  color: gray;
}

.error {
  display: block;
  color: red;
  background-color: pink;
  border-width: 2px;
  border-color: red;
}

span.separator {
  border-left: 2px solid gray;
  margin: 0 0.5rem;
}
</style>
