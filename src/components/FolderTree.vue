<template>
  <ul class="tree">
    <FolderNode
      v-for="f in folders"
      :key="f.id"
      :folder="f"
      @folderSelected="$emit('folderSelected', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import FolderNode from './FolderNode.vue'
import type { PropType } from 'vue'
import type { Folder } from './types'

defineProps({
  folders: { type: Array as PropType<Folder[]>, required: true }
})
</script>

<style scoped>
.tree { margin: 0; padding: 0; list-style: none; }
</style>
