import axios from 'axios';
type UserAgent = {
    userAgent: string;
    ip?: string;
};

export default async function useUserAgent(): Promise<UserAgent | null> {

    console.log(process.server)
    const ua = navigator.userAgent;
    return {
        userAgent: ua,
        ip: await getIP()
    };

    // return null;
}

async function getIP(){
    return (await axios.get("https://api.ipify.org/?format=json")).data.ip
}