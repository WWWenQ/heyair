export default {

    path: "/heyairivs180ww",
    name: "heyairivs180ww",
    component: () => import('../views/Heyairivs180ww/Heyairivs180ww.vue'),
    children: [
        {
            path: "/heyairivs180ww",
            redirect: '/heyairivs180ww/overview'
        },
        {
            path: "/heyairivs180ww/overview",
            name: "overview",
            component: () => import('../views/Heyairivs180ww/OverView.vue'),
        },
        {
            path: "/heyairivs180ww/photo",
            name: "photo",
            component: () => import('../views/Heyairivs180ww/Photo.vue'),
        },
        {
            path: "/heyairivs180ww/filter",
            name: "filter",
            component: () => import('../views/Heyairivs180ww/Filter.vue'),
        },
        {
            path: "/heyairivs180ww/wechatcontrol",
            name: "wechatcontrol",
            component: () => import('../views/Heyairivs180ww/WechatControl.vue'),
        },
        {
            path: "/heyairivs180ww/parameter",
            name: "parameter",
            component: () => import('../views/Heyairivs180ww/Parameter.vue'),
        },
        {
            path: "/heyairivs180ww/calculator",
            name: "calculator",
            component: () => import('../views/Heyairivs180ww/Calculator/Calculator.vue'),
            children: [
                {
                    path: "/heyairivs180ww/calculator",
                    redirect: "/heyairivs180ww/calculator/noise"
                },
                {
                    path: "/heyairivs180ww/calculator/noise",
                    name: "noise",
                    component: () => import('../views/Heyairivs180ww/Calculator/Noise.vue'),
                },
                {
                    path: "/heyairivs180ww/calculator/energy",
                    name: "energy",
                    component: () => import('../views/Heyairivs180ww/Calculator/Energy.vue'),
                },
                {
                    path: "/heyairivs180ww/calculator/temperature",
                    name: "temperature",
                    component: () => import('../views/Heyairivs180ww/Calculator/Temperature.vue'),
                },
            ]
        },
        {
            path: "/heyairivs180ww/faq",
            name: "faq",
            component: () => import('../views/Heyairivs180ww/Faq/Faq.vue'),
            children: [
                {
                    path: "/heyairivs180ww/faq",
                    redirect: "/heyairivs180ww/faq/faqsystem"
                },
                {
                    path: "/heyairivs180ww/faq/faqsystem",
                    name: "faqsystem",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqSystem.vue'),
                },
                {
                    path: "/heyairivs180ww/faq/faqproduct",
                    name: "faqproduct",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqProduct.vue'),
                },
                {
                    path: "/heyairivs180ww/faq/faqdelivery",
                    name: "faqdelivery",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqDelivery.vue'),
                },
                {
                    path: "/heyairivs180ww/faq/faqservice",
                    name: "faqservice",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqService.vue'),
                },
            ]
        },
    ]

}