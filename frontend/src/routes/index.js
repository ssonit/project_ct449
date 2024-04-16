import { createWebHistory, createRouter } from "vue-router";

import ViewHome from "../views/ViewHome.vue";

import ViewLogin from "../views/ViewLogin.vue";
import ViewRegister from "../views/ViewRegister.vue";
import ViewBookDetail from "../views/ViewBookDetail.vue";
import ViewBorrowBook from "../views/ViewBorrowBook.vue";
import ViewAdminHome from "../views/ViewAdminHome.vue";
import ViewAdminPublisher from "../views/ViewAdminPublisher.vue";
import ViewModifyPublisher from "../views/ViewModifyPublisher.vue";
import ViewUpdatePublisher from "../views/ViewUpdatePublisher.vue";
import ViewAdminAddBook from "../views/ViewAdminAddBook.vue";
import ViewAdminUpdateBook from "../views/ViewAdminUpdateBook.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/login",
    name: "login",
    component: ViewLogin,
  },
  {
    path: "/register",
    name: "register",
    component: ViewRegister,
  },
  {
    path: "/:id",
    name: "book-detail",
    component: ViewBookDetail,
  },
  {
    path: "/borrow-book",
    name: "borrow-book",
    component: ViewBorrowBook,
  },
  {
    path: "/admin",
    name: "view-admin-home",
    component: ViewAdminHome,
  },
  {
    path: "/admin/publisher",
    name: "view-admin-publisher",
    component: ViewAdminPublisher,
  },
  {
    path: "/admin/publisher/create",
    name: "view-admin-publisher-create",
    component: ViewModifyPublisher,
  },
  {
    path: "/admin/publisher/:id",
    name: "view-admin-publisher-update",
    component: ViewUpdatePublisher,
  },
  {
    path: "/admin/book/create",
    name: "view-admin-book-create",
    component: ViewAdminAddBook,
  },
  {
    path: "/admin/book/:id",
    name: "view-admin-book-update",
    component: ViewAdminUpdateBook,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
