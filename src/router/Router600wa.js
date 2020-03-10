export default {
    path: "/heyairivs600wa",
    name: "heyairivs600wa",
    component: () => import('../views/Heyairivs600wa/Heyairivs600wa.vue'),
    children: [
        {
            path: "/heyairivs600wa",
            redirect: '/heyairivs600wa/overview'
        },
        {
            path: "/heyairivs600wa/overview",
            name: "overview",
            component: () => import('../views/Heyairivs600wa/OverView.vue'),
        },
        {
            path: "/heyairivs600wa/photo",
            name: "photo",
            component: () => import('../views/Heyairivs600wa/Photo.vue'),
        },
        {
            path: "/heyairivs600wa/filter",
            name: "filter",
            component: () => import('../views/Heyairivs600wa/Filter.vue'),
        },
        {
            path: "/heyairivs600wa/wechatcontrol",
            name: "wechatcontrol",
            component: () => import('../views/Heyairivs600wa/WechatControl.vue'),
        },
        {
            path: "/heyairivs600wa/parameter",
            name: "parameter",
            component: () => import('../views/Heyairivs600wa/Parameter.vue'),
        },
        {
            path: "/heyairivs600wa/calculator",
            name: "calculator",
            component: () => import('../views/Heyairivs600wa/Calculator/Calculator.vue'),
            children: [
                {
                    path: "/heyairivs600wa/calculator",
                    redirect: "/heyairivs600wa/calculator/noise"
                },
                {
                    path: "/heyairivs600wa/calculator/noise",
                    name: "noise",
                    component: () => import('../views/Heyairivs600wa/Calculator/Noise.vue'),
                },
                {
                    path: "/heyairivs600wa/calculator/energy",
                    name: "energy",
                    component: () => import('../views/Heyairivs600wa/Calculator/Energy.vue'),
                },
                {
                    path: "/heyairivs600wa/calculator/temperature",
                    name: "temperature",
                    component: () => import('../views/Heyairivs600wa/Calculator/Temperature.vue'),
                },
            ]
        },
        {
            path: "/heyairivs600wa/faq",
            name: "faq",
            component: () => import('../views/Heyairivs600wa/Faq/Faq.vue'),
            children: [
                {
                    path: "/heyairivs600wa/faq",
                    redirect: "/heyairivs600wa/faq/faqsystem"
                },
                {
                    path: "/heyairivs600wa/faq/faqsystem",
                    name: "faqsystem",
                    component: () => import('../views/Heyairivs600wa/Faq/FaqSystem.vue'),
                },
                {
                    path: "/heyairivs600wa/faq/faqproduct",
                    name: "faqproduct",
                    component: () => import('../views/Heyairivs600wa/Faq/FaqProduct.vue'),
                },
                {
                    path: "/heyairivs600wa/faq/faqdelivery",
                    name: "faqdelivery",
                    component: () => import('../views/Heyairivs600wa/Faq/FaqDelivery.vue'),
                },
                {
                    path: "/heyairivs600wa/faq/faqservice",
                    name: "faqservice",
                    component: () => import('../views/Heyairivs600wa/Faq/FaqService.vue'),
                },
            ]
        },
    ]
}