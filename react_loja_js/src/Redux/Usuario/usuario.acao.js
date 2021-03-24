import usuarioTipo from './usuario.tipo';



export const emailSignInComeco = userCredentials =>({
    type: usuarioTipo.EMAIL_SIGN_IN_COMECO,
    payload : userCredentials
});

export const cadastrarInSucesso = user =>({
    type: usuarioTipo.CADASTRAR_IN_SUCESSO,
    payload : user
});


export const checarUsuarioSessao = user =>({
    type: usuarioTipo.CHECARUSUARIOSESSAO
});

export const SairoutUsuarioComeco = user =>({ //aqui entra o codigo importado
    type: usuarioTipo.SAIR_OUT_USUARIO_COMECO
});

export const SairoutUsuarioSucesso = user =>({
    type: usuarioTipo.SAIR_OUT_USUARIO_SUCESSO
});

export const SignUpUsuarioComeco = userCredentials => ({
    type: usuarioTipo.SIGN_UP_USUARIO_COMECO,
    payload: userCredentials
});

export const userError = err => ({
    type: usuarioTipo.USUARIO_ERROR,
    payload: err
});


export const resetPasswordStart = userCredentials => ({
    type: usuarioTipo.RECUPERAR_PASSWORD_COMECO,
    payload: userCredentials
});

export const resetPasswordSuccess = () => ({
    type: usuarioTipo.RECUPERAR_PASSWORD_SUCESSO,
    payload: true
});

export const resetUserState = () => ({
    type: usuarioTipo.RESET_USUARIO_STATE
    
});

export const googleSignInStart = () => ({
    type: usuarioTipo.GOOGLE_CADASTRAR_COMECO
    
});











