import { combineReducers } from 'redux';

import { chatsReduser } from './chats';

export const rootReducer = combineReducers({
    chats: chatsReducer,
});