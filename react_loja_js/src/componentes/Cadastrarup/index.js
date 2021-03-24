import React, { useState, useEffect } from 'react';
import './styles.scss';
import { auth, handleUserProfile } from './../../firebase/Utilidades';
import FormularioInput from './../Formularios/FormularioInput';
import Botao from './../Formularios/Botao';
import AuthWr from './../AuthWr';
import { useHistory } from 'react-router-dom';
import { SignUpUsuarioComeco} from './../../Redux/Usuario/usuario.acao';
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});

const Cadastrarup = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {currentUser, userErr} = useSelector(mapState);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/');
        }
    
    }, [currentUser]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);

        }

    }, [userErr]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);
    };

    const handleFormSubmit = event =>{
        event.preventDefault();
        dispatch(SignUpUsuarioComeco({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }
    const configAuthWr ={
        headline: 'Registrar | Cadastrar '
    };
        return(
            <AuthWr {...configAuthWr}>
                <div className="formWrap">
                        {errors.length > 0 && (
                            <ul>
                                {errors.map((err, index) => {
                                    return(
                                        <li key = { index } >
                                        { err }
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        <form onSubmit={handleFormSubmit}>
                            <FormularioInput 
                                type="text"
                                name="displayName"
                                value={displayName}
                                placeholder="Nome Completo"
                                handleChange={e=> setDisplayName(e.target.value)}
                            />

                                <FormularioInput 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Seu Email"
                                handleChange={e=> setEmail(e.target.value)}
                            />

                            <FormularioInput 
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Sua Senha"
                                handleChange={e=> setPassword(e.target.value)}
                            />

                                <FormularioInput 
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="Confirmar Sua Senha"
                                handleChange={e=> setConfirmPassword(e.target.value)}
                            />

                            <Botao type="submit">
                            Registrar | Cadastrar 

                            </Botao>

                        </form>
                    </div>
            </AuthWr>
        );

    }
    


export default Cadastrarup;