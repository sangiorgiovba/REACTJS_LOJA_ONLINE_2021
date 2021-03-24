
import usuarioTipo from './usuario.tipo';

const INITIAL_STATE = {
    currentUser: null,
    resetPasswordSuccess: false,
    userErr: []

};


const usuarioReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type) {
        case usuarioTipo.CADASTRAR_IN_SUCESSO:
            return {
                ...state,
                currentUser: action.payload,
                userErr: []
            }
        case usuarioTipo.USUARIO_ERROR:
            return {
                ...state,
                userErr: action.payload
            }

        case usuarioTipo.RECUPERAR_PASSWORD_SUCESSO:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
            
        case usuarioTipo.RESET_USUARIO_STATE:
        case usuarioTipo.SAIR_OUT_USUARIO_SUCESSO:
            return {
                ...state,
                ...INITIAL_STATE
            }

        default:
        return state;
        
    }
};

export default usuarioReducer;