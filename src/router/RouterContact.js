export default {
    path: "/contact",
    name: "contact",
    component: () => import('../views/Contact/Contact.vue'),
    children: [
        {
            path: "/contact",
            redirect: "/contact/contactus"
        },
        {
            path: "/contact/contactus",
            name: "contactus",
            component: () => import('../views/Contact/ContactUs.vue'),
        },
        {
            path: "/contact/support",
            name: "support",
            component: () => import('../views/Contact/Support.vue'),
            children: [
                {
                    path: "/contact/support",
                    redirect: "/contact/support/faqsystem"
                },
                {
                    path: "/contact/support/faqsystem",
                    name: "faqsystem",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqSystem.vue'),
                },
                {
                    path: "/contact/support/faqproduct",
                    name: "faqproduct",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqProduct.vue'),
                },
                {
                    path: "/contact/support/faqdelivery",
                    name: "faqdelivery",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqDelivery.vue'),
                },
                {
                    path: "/contact/support/faqservice",
                    name: "faqservice",
                    component: () => import('../views/Heyairivs180ww/Faq/FaqService.vue'),
                },
            ]
        },
        {
            path: "/contact/about",
            name: "about",
            component: () => import('../views/Contact/About.vue'),
        }
    ]
}

