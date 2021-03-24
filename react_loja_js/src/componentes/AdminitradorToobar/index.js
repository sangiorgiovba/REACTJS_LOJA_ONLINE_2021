import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {checarUserIsAdmin} from './../../Utilidades';


const mapState =({user})=>({
    currentUser: user.currentUser
})

const AdminToobar = props => {
    const {currentUser} = useSelector(mapState);
    const isAdmin = checarUserIsAdmin(currentUser);

    if (!isAdmin) return null;

    return(
        <div className="adminToobar">
                <ul>
                    <li>
                        <Link to="/admin">
                            Entrar No Painel Adminitrativo
                        </Link>
                    </li>
                </ul>
         </div>
    );
}

export default AdminToobar;