type UserAgent = {
    userAgent: string;
    ip?: string;
};

export default function useUserAgent(): UserAgent | null{
    if(process.server){
        const nuxtApp = useNuxtApp();
        const req = nuxtApp.ssrContext?.event.node.req;
        if(nuxtApp.ssrContext && req){
            const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            const userAgent = req.headers['user-agent'];
            return {
                userAgent: userAgent || "",
                ip: typeof ip === "string" ? ip : ip?.[0]
            };
        } 
    } else {
        return {
            userAgent: navigator.userAgent
        }
    };
    return null;
}