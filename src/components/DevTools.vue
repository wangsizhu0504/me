<script setup lang="ts">
defineProps({
  svgIcon: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
const svgicon = computed(() => {
  return 'Raycast'
})
</script>

<template>
  <div class="card-base p-4 rounded-lg flex items-center space-x-4">
    <div class="rounded-lg flex">
      <span v-if="!svgIcon" :class="icon" />
      <img v-else :key="icon" :src="icon" class="!w-19px !h-19px" />
    </div>
    <span class="flex-1 truncate text-sm">
      {{ name }}
    </span>
  </div>
</template>

<style>
.card-base{
  background-color: var(--c-bg-color);
  border-color: var(--c-border-color);
  border-width: .1px;
  transition-duration: .15s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4,0,.2,1)
}
</style>
