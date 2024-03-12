type UserAgent = {
    userAgent: string;
    ip?: string;
  };
  
  export default function useUserAgent(): UserAgent | null {
    if (!process.server) {
      const nuxtApp = useNuxtApp();
      const req = nuxtApp.ssrContext?.event.node.req;
      if (nuxtApp.ssrContext && req) {
        const ip =
          req.headers["x-forwarded-for"] ||
          req.socket.remoteAddress;
  
        const ua = req.headers["user-agent"];
  
        return {
          userAgent: ua || "",
          ip: typeof ip === "string" ? ip : ip?.[0],
        };
      }
    } else {
        console.log(process.server)
      const ua = navigator.userAgent;
      return {
        userAgent: ua
      };
    }
    
    return null;
  }