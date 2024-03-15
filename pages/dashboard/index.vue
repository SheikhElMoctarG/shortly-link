<template>
  <main class="container pt-[77px]">
    <!-- section one -->
    <section  class="py-3">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </section>
    <!-- section two  -->
    <section class="mycard my-3">
      <form class="flex  gap-4 flex-wrap md:flex-nowrap" @submit.prevent="createShortKey()">
        <div class="w-5/12"> 
            <label for="orginalURL">orginal URL</label>
            <input type="text" name="orginalURL" id="orginalURL" placeholder="your url " v-model="form.orginal_url">
          </div>
          <div class="w-5/12">
            <label for="shortKey">orginal URL</label>
            <input type="text" name="shortKey" id="shortKey" placeholder="short key " v-model="form.short_key">
          </div>
          <div class="w-full md:w-2/12 flex justify-end self-end">
          <button type="submit" class="btn-yellow w-full">Shorten <Icon name="material-symbols-light:link-rounded" size="25"/></button>
          </div>
      </form>
    </section>
    
    <section class="mt-[2rem]">
      <LinkComponent v-for="item in data" :key="item.id" :link="{shortkey: item.short_key, orginalURL: item.orginal_url || '', id: item.id, total_clicks: item.total_clicks, created_at: item.created_at}"/>
    </section>
  </main>
</template>

<script lang="ts" setup>
const toast = useToast();
import { nanoid } from 'nanoid';
import type { Database } from '../../types/supabase';
const client = useSupabaseClient<Database>();
const { data, refresh } = useAsyncData('links', async()=> {
    const {data, error} = await client.from('links').select('*').eq('user_id', useSupabaseUser().value.id).order('created_at', {ascending:false});
    return data;
  });
definePageMeta({
  middleware: 'auth'
});
const form = reactive({
  orginal_url: '',
  short_key: ''
});
onMounted(()=> {
  form.short_key = nanoid(6);
});

async function createShortKey() {
  if(form.orginal_url != '' && form.orginal_url.length >=5 && form.short_key != '' && form.short_key.length >=5){
    const {data, error} = await client.from('links').insert({
      short_key: form.short_key,
      orginal_url: form.orginal_url,
      user_id: useSupabaseUser().value?.id,
      total_clicks: 0
    });
    if(error){
      toast.add({title: error.message, color: 'red'})
      return;
    }
    toast.add({title: 'created successfully'})
    form.short_key = nanoid(6);
    form.orginal_url = '';
    await refresh()
  } else { 
    toast.add({title: 'there is error in form, check it', color: 'red'})
  }
}

</script>

<style>

</style>