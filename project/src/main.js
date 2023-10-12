import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import HomePage from "./components/HomePage.vue"
import ChatPage from "./components/ChatPage.vue"

const router = createRouter({
    routes: [{
        path: `/`,
        component: HomePage,
        
    },{
        path: `/im`,
        component: ChatPage,
    }],
    history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount("#app")
