<template>
  <main class="container pt-[77px]">
    <!-- section one -->
    <section  class="py-3">
      <h1 class="text-2xl font-bold">Dashboard</h1>
    </section>
    <!-- section two  -->
    <section class="mycard my-3">
      <form class="flex  gap-4">
        <div class="w-5/12"> 
            <label for="orginalURL">orginal URL</label>
            <input type="text" name="orginalURL" id="orginalURL" placeholder="your url ">
          </div>
          <div class="w-5/12">
            <label for="shortKey">orginal URL</label>
            <input type="text" name="shortKey" id="shortKey" placeholder="short key ">
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
definePageMeta({
  middleware: 'auth'
})
</script>

<style>

</style>