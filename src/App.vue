<template>
  <main class="app">
    <h1>📂 File Explorer</h1>

    <div v-if="loading" class="loading">Loading…</div>
    <div v-else class="explorer">
      <div class="left-panel">
        <FolderTree :folders="folders" @folderSelected="onFolderSelected" />
      </div>
      <FolderContent :folder="selectedFolder" />
    </div>
  </main>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FolderTree from './components/FolderTree.vue'
import FolderContent from './components/FolderContent.vue'
import { getAllFolders } from './api/folder'
import type { Folder } from './components/types'

const folders = ref<Folder[]>([])
const selectedFolder = ref<Folder | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    folders.value = await getAllFolders()
  } catch (e) {
    console.error('Failed to fetch folders', e)
  } finally {
    loading.value = false
  }
})

function onFolderSelected(folder: Folder) {
  selectedFolder.value = folder
}
</script>

<style scoped>
.app { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 16px; }
.loading { color: #666; }
.explorer { display: flex; gap: 16px; }
.left-panel { min-width: 200px; border-right: 1px solid #ddd; padding-right: 8px; }
</style>
