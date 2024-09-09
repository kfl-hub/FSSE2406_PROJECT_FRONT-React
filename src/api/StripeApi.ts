import * as FirebaseAuthService from "../authService/FIrebaseAuthService.ts";
import getEnvConfig from "../config/env/EnvConfig.ts";
//const baseUrl:string="http://localhost:8080"
//const baseUrl:string="http://ec2-47-129-34-31.ap-southeast-1.compute.amazonaws.com:8080"
const baseUrl=getEnvConfig().baseUrl;

const getAuthConfig = async () => {
    const accessToken = await FirebaseAuthService.getAccessToken();
    if (!accessToken) {
        console.error("**getAccessToken**")
        throw new Error()
    }
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
}

export const callStripeCheckOut = async (tid:number) => {
    try {
        const authConfig = await getAuthConfig();

        const response = await fetch(`${baseUrl}/checkout/create-checkout-session/${tid}`, {
            method: "POST",
            headers: {

                ...authConfig.headers,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        window.location.href = data.url;
    } catch (error) {
        console.error("Error during checkout:", error);
    }
};
