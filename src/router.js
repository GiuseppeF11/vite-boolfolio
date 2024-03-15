import {createRouter , createWebHistory} from 'vue-router'; //Creiamo router e webhistory

import IndexPage from './pages/IndexPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ContactPage from './pages/ContactPage.vue';

const router = createRouter ({
    history: createWebHistory(), //Per creare una cronologia di navigazione
    routes: [ //Per definire le rotte del sito
        {
            path: '/',
            name: 'home',
            component: IndexPage,
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsPage,
        },
        {
            path: '/projects/:slug', //Questa rotta avrà come parametro slug
            name: 'projects.show',
            component: SingleProjectPage,
        },
        {
            path: '/contacts', //Questa rotta avrà come parametro slug
            name: 'contacts.index',
            component: ContactPage,
        },
        {
            path: '/:patMatch(.*)*', //Questa rotta porta alla pagina di errore
            name: 'not-found',
            component: NotFoundPage,
        },
    ]
});

export {router};

