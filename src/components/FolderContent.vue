<template>
  <div class="right-panel">
    <h2>📂 {{ folder?.name || 'Select a folder' }}</h2>

    <div v-if="folder">
      <button @click="$emit('addFolder', folder)">Add Folder</button>
      <button @click="$emit('addFile', folder)">Add File</button>
      <ul>
        <li v-for="sub in folder.children || []" :key="sub.id" class="subfolder">
          📁 {{ sub.name }}
          <button @click="$emit('deleteFolder', sub)">Delete</button>
        </li>
        <li v-for="file in folder.files || []" :key="file.id" class="file">
          📄 {{ file.name }}
          <button @click="$emit('deleteFile', file)">Delete</button>
        </li>
      </ul>
    </div>
    <p v-else>Select a folder to see contents</p>
  </div>
</template>

<script setup lang="ts">
import type { Folder } from './types'

defineProps<{ folder: Folder | null }>()
</script>

<style scoped>
.right-panel {
  border-left: 1px solid #ddd;
  padding: 16px;
  min-width: 200px;
}
ul { padding-left: 0; list-style: none; }
.subfolder, .file { padding: 4px 0; }
button { margin-left: 8px; }
</style>
