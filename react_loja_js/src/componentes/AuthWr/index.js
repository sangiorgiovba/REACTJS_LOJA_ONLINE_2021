import React from 'react';
import './styles.scss';


const AuthWr = ({ headline, children })=>{
    return(
        <div className="authwr">
                <div className="wrap">
                   {headline && <h2>{headline}</h2>}

                   <div className="children">
                   {children && children }
                </div>
            </div>
        </div>
    );
}

export default AuthWr;
