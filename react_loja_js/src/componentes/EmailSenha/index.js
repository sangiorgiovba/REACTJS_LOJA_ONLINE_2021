import React,{ useState ,useEffect} from 'react';
import{useDispatch, useSelector} from 'react-redux';
import './styles.scss';
import { useHistory } from 'react-router-dom';
import{ resetPasswordStart, resetUserState} from './../../Redux/Usuario/usuario.acao';
import AuthWr from './../AuthWr';
import FormularioInput from './../Formularios/FormularioInput';
import Botao from './../Formularios/Botao';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr

});


const EmailSenha = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { resetPasswordSuccess, userErr } = useSelector(mapState);
    
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if(resetPasswordSuccess){
            dispatch(resetUserState());
            history.push('/login');
        }

    }, [resetPasswordSuccess]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }

    }, [userErr]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));
    }

    const configAuthWr = {
        headline: 'Recoperar Senha Pelo Email'
    };
        return (
            <AuthWr {...configAuthWr}>
                <div className="formWrap">
                    {errors.length>0 &&(
                        <ul>
                            {errors.map((e,index)=>{
                                return(
                                    <li key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <form onSubmit={handleSubmit}>
                        <FormularioInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Digite Seu Email"
                        handleChange={e => setEmail(e.target.value)}
                        />
                        <Botao type="submit">
                            Recoperar Senha
                        </Botao>
                    </form>
                </div>

            </AuthWr>
        );
    }

export default EmailSenha;