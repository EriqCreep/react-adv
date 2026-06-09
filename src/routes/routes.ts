import { JSX, lazy, LazyExoticComponent } from "react";
import NoLazy from "../lazyload/pages/NoLazy";
import { ShoppingPage } from "../components-patterns/pages/ShoppingPage";
// import { AboutPage } from "../lazyload/pages/AboutPage";
// import { HomePage } from "../lazyload/pages/HomePage";
// import { UserPage } from "../lazyload/pages/UserPage";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  name: string;
  component: JSXComponent | LazyExoticComponent<JSXComponent>;
  children?: Route[];
}

// const LazyHomePage = lazy(() => import(/* webpackChunkName: "home" */ "../lazyload/pages/HomePage"));
// const LazyUserPage = lazy(() => import(/* webpackChunkName: "user" */ "../lazyload/pages/UserPage"));
// const LazyAboutPage = lazy(() => import(/* webpackChunkName: "about" */ "../lazyload/pages/AboutPage"));
const LazyLayout = lazy(
  () =>
    import(/* webpackChunkName: "layout" */ "../lazyload/layout/LazyLayout"),
);

export const routes: Route[] = [
  {
    path: "/lazy-load/*",
    name: "Lazy Loading nested",
    component: LazyLayout,
  },
  {
    path: "/no-lazy",
    name: "No Lazy Loading",
    component: NoLazy,
  },
  {
    path: "/",
    name: "Shoping",
    component: ShoppingPage,
  },
  //   {
  //     path: "/",
  //     name: "Home",
  //     component: LazyHomePage,
  //   },
  //   {
  //     path: "/users",
  //     name: "Users",
  //     component: LazyUserPage,
  //   },
  //   {
  //     path: "/about",
  //     name: "About",
  //     component: LazyAboutPage,
  //   },
];
