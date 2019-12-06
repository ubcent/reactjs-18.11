import { combineReducers } from 'redux';

import { chatsReducer } from './chats';
import { ProfileReducer } from './profile';

export const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: ProfileReducer,
});