<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
const params = useRoute().params;
import type { Database } from '~/types/supabase';
const client = useSupabaseClient<Database>();
if (!params.id) {
  navigateTo('/');
}
const { data } = useAsyncData('link', async () => {
  const { data, error } = await client.from('links').select('short_key, orginal_url, id, total_clicks').eq('short_key', params.id).single();
  if (error) {
    throw createError({
      statusCode: 404,
      message: 'Not Found'
    });
  }
  return data;
});
if (data.value?.orginal_url) {
    const ua = useUserAgent();
    // const ip = "41.223.96.45";
    if(ua && ua.ip){
      const ip_info = await $fetch(`/api/get-ip-info/${ua.ip}`);
      const {data:mydata, error} = await client.from('clicks').insert({
          city: ip_info?.city,
          country: ip_info?.country,
          ip: ua.ip,
          link_id: data.value?.id,
          user_agient: ua.userAgent
      });
      await useExternalRedirect(data.value.orginal_url);
      if(error){
        console.log(error)
      } else {
        console.log(mydata)
      }
    }
    
    // console.log("I'm ready to launch ")
    
  }

</script>

<style></style>