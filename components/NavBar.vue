<template>
  <div class="fixed top-0 right-0 left-0 border-white/20 border-b backdrop-blur-md z-50">
    <nav class="container py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold">Shortly-Link</NuxtLink>
      <ul class="flex gap-4 items-center ">
        <li>About us</li>
        <li>Our services</li>
        <NuxtLink to="/auth" class="btn-yellow">Sign In</NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>