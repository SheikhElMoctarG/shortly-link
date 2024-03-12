import geoip from 'geoip-lite';

export default defineEventHandler(async (event)=>{
    const geo = geoip.lookup(event.context.params.ip);
    return geo;
})