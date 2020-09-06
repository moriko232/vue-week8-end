import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/frontend/Layout.vue";
import FrontLayout from "../components/_shared/FrontLayout.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: FrontLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/frontend/Home.vue")
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/frontend/About.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/frontend/Cart.vue")
      },
      {
        path: "/cart-success",
        name: "CartSuccess",
        component: () => import("../views/frontend/CartSuccess.vue")
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/frontend/Products.vue")
      },
      {
        path: "/product/:id",
        name: "Product",
        component: () => import("../views/frontend/Product.vue")
      }
    ]
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  // admin
  {
    path: "/admin",
    component: () => import("../views/admin/DashBoard.vue"),
    children: [{
        path: "products",
        name: "adminProducts",
        component: () => import("../views/admin/Products.vue")
      },
      {
        path: "orders",
        name: "adminOrders",
        component: () => import("../views/admin/Orders.vue")
      },
      {
        path: "coupon",
        name: "adminCoupon",
        component: () => import("../views/admin/Coupon.vue")
      },
      {
        path: "storages",
        name: "adminSstorages",
        component: () => import("../views/admin/Storages.vue")
      }
    ]
  },

  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes
});

export default router;
