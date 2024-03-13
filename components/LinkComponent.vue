<template>
  <div class="mycard my-2 flex items-center justify-between">
    <div>
      <h1 class="text-2xl text-yellow-500 font-bold">/{{link.shortkey}}</h1>
      <p class="text-black/40">{{link.orginalURL.slice(0, 35) + '...'}}</p>
    </div>
    <div class="flex items-center gap-3">
      <div class="text-black flex gap-2 items-center">
        <Icon name="ic:baseline-remove-red-eye" size="20"/>
        <p>{{ link.total_clicks }}</p>
      </div>
      <div class="p-2  rounded-full cursor-pointer hover:text-yellow-600 hover:bg-white/15" @click="handlerCopy()"><Icon name="solar:copy-line-duotone" size="30"/></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  link: {
    shortkey: string,
    orginalURL: string,
    id: number,
    total_clicks: number
  }
}>();
const  handlerCopy = async()=> {
  await navigator.clipboard.writeText(`${useRuntimeConfig().public.app_url}/${props.link.shortkey}`);
  await alert('copied!');
}
</script>

<style>

</style>