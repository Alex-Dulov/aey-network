import { createStore } from 'vuex'
import axios from "axios";


export default createStore({
    state: {
        users: []
    },
    getters: {},
    mutations: {
        SET_USERS_TO_STORE(state, users) {
            state.users = users;
        }
    },
    actions: {
        FETCH_USERS({commit}) {
            return axios.get("/users.json")
                .then((users) => {
                    console.log(users);
                    // commit("SET_USERS_TO_STORE", JSON.parse(users));
                })
        }
    }
});