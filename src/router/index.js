import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Chapter from '../views/Chapter.vue'
import Type from '../components/Type.vue'
import ContentType from "@/components/ContentType";
import ContentList from "@/views/ContentList";
import Content from "@/views/Content";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/type/',
        name: 'Type',
        component: Type,
        children: [
            {
                path: ':id/',
                name: 'contentTypeEdit',
                component: ContentType,
                props: true,
                children: [
                    {
                        path: ':attributeId/',
                        name: 'attributeEdit',
                        component: ContentType,
                        props: true,
                    }
                ]
            },
        ]
    },
    {
        path: '/content/',
        name: 'contentIndex',
        component: Content,
        props: true,
        children: [
            {
                path: ':contentTypeAlias/',
                name: 'contentList',
                component:  ContentList,
                props: true,
                children: [
                    {
                        path: 'create/',
                        name: 'contentCreate',
                        component:  ContentList,
                        props: true
                    },
                    {
                        path: ':contentId/',
                        name: 'contentEdit',
                        component:  ContentList,
                        props: true
                    }
                ]
            },
        ],
    },
    {
        path: '/chapters/',
        name: 'ChapterList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/chapters/:slug/',
        name: 'Chapter',
        component: Chapter
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
