<template>
  <div class="h-screen grid place-content-center">
    <div class="container">
      <div class="mycard">
        <div class="flex justify-center py-2">
          <Icon name="tabler:brand-oauth" size="45" class="text-slate-800" />
        </div>
        <button class="btn-yellow my-2 font-bold w-full" @click="loginWith('github')">Continue using Github <Icon name="uim:github-alt" class="mx-2"/></button>
        <button class="btn-yellow mb-4 font-bold w-full" @click="loginWith('google')">Continue using Google <Icon name="tabler:brand-google-filled" class="mx-2"/></button>
        <hr class="border border-black/10 my-3">
        <div v-if="isLogining">
          <LoginSection/>
          <p class="text-center cursor-pointer" @click="isLogining = false">you dont have an one? <span>Register</span></p>
        </div>
        <div v-else>
          <RegisterSection/>
          <p class="text-center cursor-pointer" @click="isLogining = true">already have an one? <span>Login</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const client = useSupabaseClient();
const isLogining = ref<Boolean>(true);
function loginWith(prov: string) {
  client.auth.signInWithOAuth({ provider: prov });
};
const user = useSupabaseUser();
if(user.value) {
    navigateTo('/dashboard');
  }
</script>

<style></style>