import React from 'react';
import Cabecalho from './../componentes/Cabecalho';
import Rodape from './../componentes/Rodape';

const LayoutPrincipal = props => {
    return(
        <div>
            <Cabecalho {...props} />
            <div className="main">
                {props.children}
            </div>
            <Rodape/>
        </div>
        
    );
};

export default LayoutPrincipal;