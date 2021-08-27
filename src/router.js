import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Experience from '@/pages/Experience.vue';
import ExperienceDetail from '@/pages/ExperienceDetail.vue';
import Skills from '@/pages/Skills.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
    {
		path: '/about',
		name: 'About',
		component: About,
	},
    {
		path: '/featured-experience',
		name: 'Experience',
		component: Experience,
	},
	{
		path: '/featured-experience/:slug',
		name: 'ExperienceDetail',
		component: ExperienceDetail
	},
    {
		path: '/skills',
		name: 'Skills',
		component: Skills,
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;