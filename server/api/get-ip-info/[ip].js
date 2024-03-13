import geoip from 'geoip-lite';

export default defineEventHandler((event)=>{
    return geoip.lookup(event.context.params.ip);
})