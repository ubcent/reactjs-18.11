import { Profile } from 'pages/Profile';
import { AboutPage } from 'pages/AboutPage';
import { Messenger } from 'components/Messenger';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Messenger,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: Messenger,
  }
]