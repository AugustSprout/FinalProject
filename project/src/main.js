import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import HomePage from "./components/HomePage.vue"
import ChatPage from "./components/ChatPage.vue"
import ApiPage from "./components/ApiPage"
import AuthPage from "./components/AuthPage"
import ProfilePage from "./components/ProfilePage"

const router = createRouter({
    routes: [{
        path: `/`,
        name: `HomePage`,
        component: HomePage,
    },{
        path: `/im`,
        name: `ChatPage`,
        component: ChatPage,
        meta: {
            requiresAuth: true,
        }
    },{
        path: `/api`,
        name: `ApiPage`,
        component: ApiPage,
    },{
        path: `/auth`,
        name: `AuthPage`,
        component: AuthPage,
    },{
        path: `/profile`,
        name: `ProfilePage`,
        component: ProfilePage,
        meta: {
            requiresAuth: true,
        }
    }],
    history: createWebHistory(),
})



router.beforeEach((to) => {
    if(to.meta.requiresAuth && !localStorage.getItem(`isAuth`)){
        return{
            name: `AuthPage`
        }
    }
}
)

const app = createApp(App)
app.use(router)
app.mount("#app")
