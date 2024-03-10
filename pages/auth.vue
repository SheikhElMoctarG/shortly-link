<template>
  <div class="h-screen grid place-content-center">
    <div class="container">
      <div class="mycard">
        <div class="flex justify-center py-2">
          <Icon name="arcticons:otp-authenticator" size="45" class="text-white/90"/>
        </div>
        <button class="btn-yellow my-4 font-bold w-full">Continue using Github</button>
        <hr class="border border-white/10 my-3">
        <form action="">
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="yourname@example.com">
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="yourname@example.com">
          </div>
          <button type="submit" class="btn-yellow mt-2 w-full">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>