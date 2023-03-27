import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {initializeApp} from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/main.css'


const firebaseConfig = {
    apiKey: "AIzaSyAxhxa1Hyv9OrDbqqFLT7FZQvOB0U_gbBU",
    authDomain: "eg427-5273e.firebaseapp.com",
    projectId: "eg427-5273e",
    storageBucket: "eg427-5273e.appspot.com",
    messagingSenderId: "497295019958",
    appId: "1:497295019958:web:dc748402aeba63c80dfb17"
  };


  initializeApp(firebaseConfig)
const app = createApp(App)

app.use(router)

app.mount('#app')