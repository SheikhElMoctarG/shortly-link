<template>
  <div class="mycard my-2 flex items-center justify-between shadow-none flex-wrap md:flex-nowrap">
    <div>
      <NuxtLink :to="`/dashboard/${link.shortkey}`" class="text-2xl text-yellow-500 font-bold">/{{ link.shortkey }}
      </NuxtLink>
      <p class="text-black/70">{{ link.orginalURL.slice(0, 35) + '...' }}</p>
    </div>
    <div class="flex items-center gap-3">
      <div>
        <div class="text-black flex gap-2 items-center">
          <Icon name="ic:baseline-remove-red-eye" size="20" />
          <p>{{ link.total_clicks }}</p>
        </div>
        <p>{{ moment(link.created_at).format('MMMM Do YYYY, HH:mm') }}</p>
      </div>
      <div class="p-2  rounded-full cursor-pointer hover:text-yellow-600 hover:bg-white/15" @click="handlerCopy()">
        <Icon name="solar:copy-line-duotone" size="30" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment';
const toast = useToast();
const props = defineProps<{
  link: {
    shortkey: string,
    orginalURL: string,
    id: number,
    total_clicks: number,
    created_at: string
  }
}>();
const handlerCopy = async () => {
  await navigator.clipboard.writeText(`${useRuntimeConfig().public.app_url}/${props.link.shortkey}`);
  toast.add({ title: 'Copied successfully', color: 'blue' });
}
</script>

<style></style>