<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
import geoip from 'geoip-lite';
const params = useRoute().params;
const client = useSupabaseClient();
if (!params.id) {
  navigateTo('/');
}
const { data } = useAsyncData('link', async () => {
  const { data, error } = await client.from('links').select('short_key, orginal_url').eq('short_key', params.id).single();
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
    console.log('lookup', geoip.lookup("207.97.227.239"));
    useExternalRedirect(data.value.orginal_url);
  }

</script>

<style></style>