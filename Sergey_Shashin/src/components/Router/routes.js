import { Messanger } from 'components/Messanger/Messanger';
import { AboutPage } from 'pages/AboutPage';
import { Profile } from 'components/Profile/Profile';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Messanger,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: Messanger,
  },
]