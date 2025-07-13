
import DevConfig from "./DevConfig.ts";
import ProConfig from "./ProConfig.ts";

export default function getEnvConfig() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return DevConfig;
    } else {
        return ProConfig;
    }
}