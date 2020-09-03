import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './../views/Dashboard.vue';
import Login from './../views/Login.vue';
import User from './../components/User/User.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
});
