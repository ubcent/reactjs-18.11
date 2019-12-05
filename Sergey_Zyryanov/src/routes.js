import {Layout} from 'components/Layout';
import {AboutPage} from 'pages/AboutPage';
import {Messenger} from 'components/Messenger';
import {MessageForm} from "components/MessageForm";
import {MessagesList} from "components/MessagesList";
import {Profile} from "components/Profile";

export const routes = [
  {
    path: '/',
    exact: true,
    component: Layout,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/chat/:id',
    exact: true,
    component: Layout,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
];