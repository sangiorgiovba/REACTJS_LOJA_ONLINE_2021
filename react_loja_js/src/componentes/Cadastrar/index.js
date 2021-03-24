import React, { useState, useEffect } from 'react';
import './styles.scss';
import Botao from './../Formularios/Botao';
import FormularioInput from './../Formularios/FormularioInput';
import AuthWr from './../AuthWr';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {emailSignInComeco,  googleSignInStart} from './../../Redux/Usuario/usuario.acao';



const mapState = ({ user }) => ({
   currentUser: user.currentUser
});



const Cadastrar = props =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(currentUser) {
            resetForm();
           
            history.push('/');
        }

    }, [currentUser]);

    const resetForm =()=>{
        setEmail('');
        setPassword('');
    };

    const handleSubmit =  e =>{
        e.preventDefault();
        dispatch(emailSignInComeco({ email, password }));
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }

       const configAuthWr ={
            headline: 'Login | Entrar'
        };

        return(
            <AuthWr{...configAuthWr}>
              <div className="formwrap">
                       <form onSubmit={handleSubmit}>
                           <FormularioInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Seu Email"
                                handleChange={e => setEmail(e.target.value)}  
                           />

                            <FormularioInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Sua Senha"
                                handleChange={e => setPassword(e.target.value)}    
                           />

                           <Botao type="submit">
                               Login | Entrar
                           </Botao>



                            <div className="socialSignin">
                                <div className="row">
                                    <Botao onClick = { handleGoogleSignIn }>
                                     Com Google
                                    </Botao>
                                </div>
                            </div> 

                            <div className="links">
                                
                                    <Link to="/recoperar">
                                     Recoperar Sua Senha
                                    </Link>
                            </div> 
                       </form>
                   </div>
            </AuthWr>
        );
    }


export default Cadastrar;