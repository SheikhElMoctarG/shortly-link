<template>
  <div class="h-screen grid place-content-center">
    <div class="container">
      <div class="mycard">
        <div class="flex justify-center py-2">
          <Icon name="arcticons:otp-authenticator" size="45" class="text-white/90" />
        </div>
        <button class="btn-yellow my-4 font-bold w-full" @click="loginWithGithub">Continue using Github</button>
        <hr class="border border-white/10 my-3">
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
function loginWithGithub() {
  client.auth.signInWithOAuth({ provider: 'github' });
};
</script>

<style></style>