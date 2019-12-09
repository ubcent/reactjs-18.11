import { App } from 'components/App';

export const routes = [
  {
    path: '/',
    exact: true,
    component: App,
  },
  {
    path: '/chat/:id',
    exact: true,
    component: App,
  }
];