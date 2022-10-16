import {createRouter, createWebHistory} from "vue-router";
import aeyProfile from "../components/aey-profile/aey-profile.vue";
import aeyNews from "../components/aey-news/aey-news.vue";
import aeyChats from "../components/aey-chats/aey-chats.vue";
import aeyGroups from "../components/aey-groups/aey-groups.vue";
import aeyUsers from "../components/aey-users/aey-users.vue";
import aeySettings from "../components/aey-settings/aey-settings.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/profile", component: aeyProfile},
        {path: "/news", component: aeyNews, alias: "/"},
        {path: "/chats", component: aeyChats},
        {path: "/groups", component: aeyGroups},
        {path: "/users", component: aeyUsers},
        {path: "/settings", component: aeySettings},
    ]
})
