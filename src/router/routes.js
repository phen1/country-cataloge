const routes = [
  {
    path: "/",
    // meta: { requiresAuth: true },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "home",
        path: "/",
        component: () => import("pages/Country/Index.vue"),
        meta: { title: "Home", subtitle: "Country" },
      },
      
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
