import {createContext} from "react";
import {UserData} from "../type/User.type.ts";

export const LoginUserContext = createContext<UserData|null|undefined>(undefined);


