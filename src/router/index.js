import {createRouter, createWebHistory} from 'vue-router'

import MainPage from "@/views/MainPage";
import ContentTypeListPage from '@/views/ContentTypeListPage.vue'
import ContentTypePage from "@/views/ContentTypePage";
import ContentListPage from "@/views/ContentListPage";
import ContentPage from "@/views/ContentPage";
import SettingsPage from "@/views/SettingsPage";


const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage
    },
    {
        path: '/type/',
        name: 'Type',
        component: ContentTypeListPage,
        children: [
            {
                path: ':contentTypeId/',
                name: 'contentTypeEdit',
                component: ContentTypePage,
                props: true,
                children: [
                    {
                        path: ':attributeId/',
                        name: 'attributeEdit',
                        component: ContentTypePage,
                        props: true,
                    }
                ]
            },
        ]
    },
    {
        path: '/content/',
        name: 'contentIndex',
        component: ContentPage,
        props: true,
        children: [
            {
                path: ':contentTypeAlias/',
                name: 'contentList',
                component: ContentListPage,
                props: true,
                children: [
                    {
                        path: 'create/',
                        name: 'contentCreate',
                        component: ContentListPage,
                        props: true
                    },
                    {
                        path: ':contentId/',
                        name: 'contentEdit',
                        component: ContentListPage,
                        props: true
                    }
                ]
            },
        ],
    },

    {
        path: '/settings/',
        name: 'settings',
        component: SettingsPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
