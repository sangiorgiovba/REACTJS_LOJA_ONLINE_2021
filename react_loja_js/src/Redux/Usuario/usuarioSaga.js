import { takeLatest, call, all, put } from 'redux-saga/effects';
import usuarioTipo from './usuario.tipo';
import {cadastrarInSucesso, SairoutUsuarioSucesso,resetPasswordSuccess, userError} from './usuario.acao';
import { auth, handleUserProfile,getCurrentUser, GoogleProvider} from './../../firebase/Utilidades';
import { handleResetPasswordAPI } from './usuario.ajuda';


export function* getSnapshotFromUserAuth(user,additionalData={}) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
        const snapshot = yield userRef.get();
        yield put(
            cadastrarInSucesso({
                id: snapshot.id,
                   ...snapshot.data()
            })
        );
        } catch (err) {
    }    
}  


export function* emailSignInEntrar({ payload: {email,password } }) {
    try {
        const { user } = yield  auth.signInWithEmailAndPassword(email, password);
            yield getSnapshotFromUserAuth(user)
            
        } catch (err) {
            
    }
}

export function* noemailSignInEntrar() {
yield takeLatest(usuarioTipo.EMAIL_SIGN_IN_COMECO, emailSignInEntrar);
}

export function* isUserAuthenticated() {
   try {
       const userAuth = yield getCurrentUser();
       if(!userAuth) return;
       yield getSnapshotFromUserAuth(userAuth);

   } catch (err) {
       
   }
}

export  function* onCheckUserSession(){
    yield takeLatest(usuarioTipo.CHECARUSUARIOSESSAO,isUserAuthenticated);
}

export  function* signOutUser(){
    try {
        yield auth.signOut();
        yield put(
            SairoutUsuarioSucesso() 
        )
        
    } catch (err) {
        
    }
}

export  function* onsignOutUserStart(){
    yield takeLatest(usuarioTipo.SAIR_OUT_USUARIO_COMECO, signOutUser);
}



export  function* signUpUser({ payload: {
    displayName,
    email,
    password,
    confirmPassword

} }){
    if(password !== confirmPassword) {
        const err = ['Sua senha e confirmacao de senha nao corresponden.'];
        yield put(
            userError(err)
        );
        return;
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email,password);
        const additionalData = { displayName };
        yield getSnapshotFromUserAuth (user, additionalData);
        
    } catch (err) {
            
    }   
}

export  function* onsignUpUserStart(){
    yield takeLatest(usuarioTipo.SIGN_UP_USUARIO_COMECO, signUpUser);
}

export  function* resetPassword({payload: { email }}) {
    try {
        yield call(handleResetPasswordAPI, email);
        yield put(resetPasswordSuccess()
        );

    } catch (err) {
        yield put (userError(err)
        )
    }
}

export  function* onResetPasswordStart() {
    yield takeLatest(usuarioTipo.RECUPERAR_PASSWORD_COMECO, resetPassword);
}



export  function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider);
        yield getSnapshotFromUserAuth(user);
        
    } catch (err) {
        
    }
}

export  function* onGoogleSignInStart() {
    yield takeLatest(usuarioTipo.GOOGLE_CADASTRAR_COMECO, googleSignIn);
}

export default function* usuarioSagas(){
    yield all([
        call(noemailSignInEntrar), 
        call(onCheckUserSession), 
        call(onsignOutUserStart), 
        call(onsignUpUserStart), 
        call(onResetPasswordStart),
        call(onGoogleSignInStart),
    ])
}
   