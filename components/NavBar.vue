<template>
  <div class="fixed top-0 right-0 left-0 border-black/20 border-b backdrop-blur-md z-50">
    <nav class="container py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">Shortly-Link</NuxtLink>
      <ul class="flex gap-4 items-center ">
        <li>About us</li>
        <li>Our services</li>
        <NuxtLink v-if="!user" to="/auth" class="btn-yellow">Sign In</NuxtLink>
        <button v-else @click="client.auth.signOut(); navigateTo('/')">Logout</button>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
</script>

<style>

</style>