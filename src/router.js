import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Experience from '@/pages/Experience.vue';
import ExperienceDetail from '@/pages/ExperienceDetail.vue';
import Skills from '@/pages/Skills.vue';
import BlogPost from '@/pages/BlogPost.vue';
import Contact from '@/pages/Contact.vue';


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
		path: '/skills',
		name: 'Skills',
		component: Skills,
	},
    {
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;