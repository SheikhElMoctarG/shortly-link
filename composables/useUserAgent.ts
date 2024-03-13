import axios from 'axios';
type UserAgent = {
    userAgent: string;
    ip?: string;
    city: string;
    country: string;
};

export default async function useUserAgent(): Promise<UserAgent | null> {

    console.log(process.server)
    const ua = navigator.userAgent;
    const {ip, city, region} = await getInfo();
    return {
        userAgent: ua,
        ip: ip,
        city: city,
        country: region
    };

    // return null;
}

async function getInfo(){
    return (await axios.get("https://ipinfo.io/json?token=030461ae02e658")).data
}