import { Messenger } from "components/Messenger";
import { ProfilePage} from 'pages/ProfilePage'

export const routes = [
  { path: '/', component: Messenger, exact: true },
  { path: '/profile', component: ProfilePage },
  { path: '/chats/:id', component: Messenger, exact: true }
];
