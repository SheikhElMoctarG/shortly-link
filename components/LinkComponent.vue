<template>
  <div class="mycard my-2 flex items-center justify-between">
    <div>
      <h1 class="text-2xl text-yellow-500 font-bold">/{{link.shortkey}}</h1>
      <p class="text-white/40">{{link.orginalURL}}</p>
    </div>
    <div class="p-2  rounded-full cursor-pointer hover:text-yellow-600 hover:bg-white/15"><Icon name="solar:copy-line-duotone" size="30"/></div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  link: {
    shortkey: string,
    orginalURL: string,
    id: string
  }
}>();
</script>

<style>

</style>