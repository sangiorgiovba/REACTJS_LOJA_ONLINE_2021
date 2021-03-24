import React from 'react';
import Cabecalho from './../componentes/Cabecalho';
import Rodape from './../componentes/Rodape';

const LayoutPaginaHome = props => {
    return(
        <div className="fullheight">
            <Cabecalho {...props} />
            {props.children}
            <Rodape/>
        </div>
        
    );
};

export default LayoutPaginaHome;