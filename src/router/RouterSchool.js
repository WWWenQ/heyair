export default {
    path: "/school",
    name: "school",
    component: () => import('../views/School/School.vue'),
    children: [
        {
            path: "/school",
            redirect: "/school/overview"
        },
        {
            path: "/school/overview",
            name: "overview",
            component: () => import('../views/School/OverView.vue'),
        },
        {
            path: "/school/parents",
            name: "parents",
            component: () => import('../views/School/Parents.vue'),
        },
        {
            path: "/school/room",
            name: "room",
            component: () => import('../views/School/Room.vue'),
        },
        {
            path: "/school/manage",
            name: "manage",
            component: () => import('../views/School/Manage.vue'),
        },
    ]
}