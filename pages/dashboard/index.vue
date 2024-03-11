<template>
  <main class="container pt-[77px]">
    <!-- section one -->
    <section  class="py-3">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </section>
    <!-- section two  -->
    <section class="mycard my-3">
      <form class="flex  gap-4" @submit.prevent="createShortKey()">
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
      <LinkComponent v-for="item in 5" :key="item" :link="{shortkey: 'shsdfsf', orginalURL: 'https://sheikhelmoctar.me',id: '444'}"/>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid';
import type { Database } from '../../types/supabase';
const client = useSupabaseClient<Database>();
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
  const {data, error} = await client.from('links').insert({
      short_key: form.short_key,
      orginal_url: form.orginal_url,
      user_id: useSupabaseUser().value?.id,
      total_clicks: 0
    });
    if(error){
      alert(error.message);
      return;
    } 
    alert('created successfully')
}

</script>

<style>

</style>