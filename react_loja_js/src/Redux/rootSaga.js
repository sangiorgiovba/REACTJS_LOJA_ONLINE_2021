import { all, call } from 'redux-saga/effects';
import usuarioSagas from './Usuario/usuarioSaga';





export default function* rootSaga(){
    yield all([call(usuarioSagas)])
}