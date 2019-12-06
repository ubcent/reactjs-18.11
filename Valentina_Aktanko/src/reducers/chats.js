import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load } from 'actions/chats';

const initialState = new Map({
    loading: false,
    entries: new Map(),
});

export const chatsReducer = handleSctions({
    [load] : (state, action) => {
        return state.set('entries', fromJS({
            '1': {
                id: 1,
                messages: [
                    { text: 'Привет! это чат №1', author: 'Bot' },
                ],
                name: 'Chat 1',
            },
            '2': {
                id: 1,
                messages: [
                    { text: 'Привет! это чат №2', author: 'Bot' },
                ],
                name: 'Chat 2',
            },
            '3': {
                id: 1,
                messages: [
                    { text: 'Привет! это чат №3', author: 'Bot' },
                ],
                name: 'Chat 3',
            }
        }));
    }// state = prevState
}, initialState);