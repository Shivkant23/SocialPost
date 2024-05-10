import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import SinglePost from './components/SinglePost.vue';
// import NotFoundComponent from './components/NotFoundComponent.vue';
import SignUp from './components/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/home', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent },
    { path: '/signup', component: SignUp },
    { path: '/login', component: LoginComponent },
    { path: '/singlepost', component: SinglePost, props: true },
    // { path: '*', component: NotFoundComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;