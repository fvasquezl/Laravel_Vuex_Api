import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import SignIn from '../views/SignIn';
import Dashboard from '../views/Dashboard';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/signin',
		name: 'signin',
		component: SignIn,
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard,
		beforeEnter: (to, from, next) => {
			if (!store.getters['auth/authenticated']) {
				return next({
					name: 'signin',
				});
			}
			next();
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
