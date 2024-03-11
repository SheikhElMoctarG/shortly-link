<template>
    <form @submit.prevent="loginwithEmail()">
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="yourname@example.com" v-model="form.email">
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" v-model="form.pass">
          </div>
          <button type="submit" class="btn-yellow mt-2 w-full">Login</button>
          <p class="text-center mt-3 text-red-500">{{ myerror }}</p>
    </form>
</template>
<script lang="ts" setup>
const client = useSupabaseClient();
const form = reactive({
  email: '',
  pass: ''
});
const myerror = ref<String>('');
    async function loginwithEmail() {
  if (!form.email || !form.pass) {
    return myerror.value = 'there is a problem in email or password ';
  };
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: form.email,
      password: form.pass
    });
    if(error){
      myerror.value = error.message;
      return;
    }
    console.log(data)
  } catch (error) {
    myerror.value = "something is wrong..."
  }
}
</script>