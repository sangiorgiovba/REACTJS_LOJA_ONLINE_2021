import React from 'react';
import m1 from './../../assets/m1.jpg';
import h1 from './../../assets/h1.jpg';
import './styles.scss';

const Diretorio =props=>{
    return(
       
        <div  className="diretorio">
            <div className="wrap">
                <div className="item" style={{
                        backgroundImage: `url(${m1})`
                    }}>
                    <a>Secao Feminino</a>
                    </div>

                    <div className="item" style={{
                        backgroundImage: `url(${h1})`
                    }}>
                        <a>Secao Masculino</a>
                    </div>
                    
            </div>
        </div>
    );
};

export default Diretorio;