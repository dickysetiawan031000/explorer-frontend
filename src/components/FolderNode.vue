<template>
  <li class="node">
    <div class="row" @click="toggle">
      <span class="twisty">{{ hasContent ? (open ? '▾' : '▸') : '•' }}</span>
      <span class="icon">📁</span>
      <span class="name">{{ folder.name }}</span>
    </div>

    <ul v-if="open" class="children">
      <!-- Files -->
      <li v-for="file in folder.files || []" :key="'f-' + file.id" class="file">
        <span class="icon">📄</span> {{ file.name }}
      </li>

      <!-- Subfolders (rekursif) -->
      <FolderNode
        v-for="child in folder.children || []"
        :key="child.id"
        :folder="child"
        @folderSelected="$emit('folderSelected', $event)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Folder } from './types'
import FolderNode from './FolderNode.vue' // recursive import

const props = defineProps<{ folder: Folder }>()
const emit = defineEmits<{ (e: 'folderSelected', folder: Folder): void }>()

const open = ref(false)
const hasContent = computed(() => ((props.folder.children?.length ?? 0) + (props.folder.files?.length ?? 0)) > 0)

function toggle() {
  if (!hasContent.value) return
  open.value = !open.value
  emit('folderSelected', props.folder)
}
</script>

<style scoped>
.node { list-style: none; }
.row { display: flex; align-items: center; gap: 6px; padding: 2px 6px; cursor: pointer; user-select: none; border-radius: 6px; }
.row:hover { background: #f6f6f6; }
.children { margin-left: 18px; padding-left: 8px; border-left: 1px dashed #ddd; }
.file { list-style: none; padding: 2px 4px; }
.icon { width: 18px; text-align: center; }
.twisty { width: 14px; display: inline-block; }
.name { white-space: nowrap; }
</style>
