import { App } from "components/App";
import { AboutPage } from "pages/AboutPage";
import { ProfilePage } from "pages/ProfilePage";

export const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: App,
  },
  {
    path: '/profile',
    exact: true,
    component: ProfilePage,
  },
]