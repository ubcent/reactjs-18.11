import { AppRedux } from 'containers/AppContainer';

export const routes = [
  {
    path: '/',
    exact: true,
    component: AppRedux,
  },
  {
    path: '/chat/:id',
    exact: true,
    component: AppRedux,
  }
];