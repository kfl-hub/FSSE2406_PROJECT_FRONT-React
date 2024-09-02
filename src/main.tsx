
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import * as FirebaseAuthService from "./authService/FIrebaseAuthService.ts";

FirebaseAuthService.serviceInit();

createRoot(document.getElementById('root')!).render(

//     <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
   <App/>
// </DevSupport>

)
