<template>
  <div class="pt-[90px] container mx-auto">
    <div v-if="data?.data != null">
      <h2 class="capitalize text-2xl font-semibold text-black">statistics</h2>
    <div class="flex items-center gap-1">
      <h1 class="font-semibold text-xl my-2 text-yellow-600 ">/{{ data?.data?.short_key }}</h1>
      <div
        class="px-2 pb-1  rounded-lg cursor-pointer hover:text-yellow-600 hover:border-yellow-600 hover:bg-white/15 border border-black/15"
        @click="copy(`/${data?.data?.short_key}`)">
        <Icon name="bi:copy" size="15" />
      </div>
    </div>
    <div>
      {{ moment(data?.data?.created_at).format('MMMM Do YYYY, h:mm:ss a') }}
    </div>
    <div class="flex items-center gap-3 mt-4 stats">
      <div class="mycard">
        <h1 class="text-4xl font-bold text-black py-2">{{ data?.data?.total_clicks }}</h1>
        <p class="capitalize">total clicks</p>
      </div>
      <div class="mycard w-full">
        <textarea :value="data?.data?.orginal_url" rows="3"
          class="w-full bg-transparent focus:outline-none appearance-none resize-none"></textarea>
        <div
          class="absolute right-3 bottom-3 px-2 pb-1  rounded-lg cursor-pointer hover:text-yellow-600 hover:border-yellow-600 hover:bg-white/15 border border-black/15"
          @click="copy(data?.data?.orginal_url)">
          <Icon name="bi:copy" size="15" />
        </div>
      </div>
    </div>
    <div class="my-3">
      <h1 class="text-xl font-semibold">Informations of visitors:</h1>
      <div class="mycard my-2 flex justify-between items-center shadow-none" v-for="info of data?.my_views" :key="info.id">
        <div>
          <h2 class="text-lg font-semibold">{{ info.ip }}</h2>
          <p>{{ info.country }} ({{ info.city }})</p>
        </div>
        <div>
          <p>{{  moment(info.created_at).format('MMMM Do YYYY, HH:mm') }}</p>
          <p class="truncate">{{ info.user_agient.slice(0, 30)+ ".." }}</p>
        </div>
      </div>
    </div>
    </div>
    <div v-else class="text-xl text-red-700 text-center">
      <h1>you don't have a permissions</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toast = useToast();
import moment from 'moment';
import type { Database } from '~/types/supabase';
const client = useSupabaseClient<Database>();

definePageMeta({
  middleware: 'auth'
});
const { data } = await useAsyncData('link', async () => {
  const { data, error } = await client.from('links').select('*').eq('user_id', useSupabaseUser().value?.id).eq('short_key', useRoute().params.id).single();
  const { data: my_views } = await client.from('clicks').select('*').eq('link_id', data?.id);
  return { data, my_views };
});
async function copy(text:string) {
  await navigator.clipboard.writeText(text);
  toast.add({title: 'copied successfully!'});
}
</script>

<style></style>