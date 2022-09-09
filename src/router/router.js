import {createRouter, createWebHistory} from "vue-router";
import aeyHome from "../components/aey-home/aey-home.vue";
import aeySettings from "../components/aey-settings/aey-settings.vue";
import aeyNews from "../components/aey-news/aey-news.vue";
import aeyProfile from "../components/aey-profile/aey-profile.vue";
import aeyChats from "../components/aey-chats/aey-chats.vue";
import aeyUsers from "../components/aey-users/aey-users.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/home", component: aeyHome, alias: "/"},
        {path: "/news", component: aeyNews},
        {path: "/settings", component: aeySettings},
        {path: "/chats", component: aeyChats},
        {path: "/profile", component: aeyProfile},
        {path: "/users", component: aeyUsers},
    ]
})
