import React from 'react';
import './styles.scss';

const Botao = ({ children, ...otherProps }) => {
    return(
        <button className="btn" {...otherProps }>
           { children }
        </button>
    );
}

export default Botao;