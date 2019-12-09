import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

function logger(store) {
    return function wrapDispatch(next) {
        return function dispatchAndLog(action) {
            console.log('Action' , action);
            console.log('prevState', store.getState().chats.toJS());

            const result = next(action);
            console.log('nextState', store.getState().chats.toJS());

            return result;
        }
    }
}
// logger()()(); 


import { rootReducer } from 'reducers';

export const store = createStore(rootReducer, applyMiddleware(logger));