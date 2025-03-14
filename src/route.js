import { createRouter, createWebHistory } from 'vue-router';
import AboutMePage from './pages/AboutMePage.vue';
import Home from './Home.vue';
import ContactPage from './pages/ContactPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ExpertisePage from './pages/ExpertisePage.vue';



// Define the routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutme",
    name: "AboutMePage",
    component: AboutMePage,
  },
  {
    path: "/projects",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/expertise",
    name: "ExpertisePage",
    component: ExpertisePage,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router
export default router;
