<template>
  <div class="mycard my-2 flex items-center justify-between">
    <div>
      <h1 class="text-2xl text-yellow-500 font-bold">/{{link.shortkey}}</h1>
      <p class="text-white/40">{{link.orginalURL.slice(0, 30) + '...'}}</p>
    </div>
    <div class="p-2  rounded-full cursor-pointer hover:text-yellow-600 hover:bg-white/15" @click="handlerCopy()"><Icon name="solar:copy-line-duotone" size="30"/></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  link: {
    shortkey: string,
    orginalURL: string,
    id: number
  }
}>();
const  handlerCopy = async()=> {
  await navigator.clipboard.writeText(`${useRuntimeConfig().public.app_url}/${props.link.shortkey}`);
  await alert('copied!');
}
</script>

<style>

</style>