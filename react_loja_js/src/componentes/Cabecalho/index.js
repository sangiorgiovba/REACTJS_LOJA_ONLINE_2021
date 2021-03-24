import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.PNG';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SairoutUsuarioComeco } from './../../Redux/Usuario/usuario.acao';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Cabecalho = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);
    const signOut = () => {
        dispatch(SairoutUsuarioComeco());
    };

    return(
        <header className="header">
                <div className="wrap">
                    <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="LOJA_JS"/>
                    </Link>
                    </div>

                    <div className="callToAction">
                        {currentUser && (
                            <ul>
                            <li>
                                <Link to="/painel">
                                 Minha Conta
                                </Link>
                            </li>
                            <li>
                                 <span onClick={() => signOut()}>
                                    Sair Do Sistema
                                </span>
                            </li>
                            </ul>
                        )}
                        
                        {!currentUser && (
                            <ul>
                            <li>
                                <Link to="/registrar">
                                 Registrar|Cadastrar
                                </Link>
                            </li>

                            <li>
                                <Link to="/login">
                                 Login|Entrar
                                </Link>
                            </li>
                        </ul>

                        )}
                    </div>
                </div>

        </header>
    );
};

Cabecalho.defaultProps={
    currentUser: null
};

export default Cabecalho;