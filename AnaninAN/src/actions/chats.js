import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io('http://localhost:8888');

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const add = createAction('[Chats] Add');

export const listen = () => (dispatch) => {
  socket.on('new chat', (chat) => {
    dispatch(add(chat));
  });
}

export const createChat = chat => {
  socket.emit('new chat', chat);
}