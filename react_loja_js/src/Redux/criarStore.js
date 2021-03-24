import { createStore, applyMiddleware } from 'redux';
import createSagaMiddle from 'redux-saga';
import rootSaga from './rootSaga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';



const sagaMiddleware = createSagaMiddle();
export const middlewares = [thunk, sagaMiddleware, logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;
