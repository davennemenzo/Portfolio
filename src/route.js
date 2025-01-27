import { createRouter, createWebHistory } from 'vue-router';
import AboutMePage from './pages/AboutMePage.vue';
import Home from './pages/Home.vue';
import CaseStudyPage from './pages/CaseStudyPage.vue';
import ContactPage from './pages/ContactPage.vue';
import SkillsAndToolsPage from './pages/SkillsAndToolsPage.vue';


// Define the routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aboutme',
    name: 'AboutMePage',
    component: AboutMePage,
  },
  {
    path: '/casestudy',
    name: 'CaseStudyPage',
    component: CaseStudyPage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/skillsandtools',
    name: 'SkillsAndToolsPage',
    component: SkillsAndToolsPage,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
