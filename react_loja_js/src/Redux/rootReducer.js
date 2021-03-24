import { combineReducers } from 'redux';

import usuarioReducer from './Usuario/usuario.reducer';


export default combineReducers({
    user: usuarioReducer
});