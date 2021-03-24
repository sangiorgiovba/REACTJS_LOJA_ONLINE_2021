import { auth } from './../../firebase/Utilidades';

export const handleResetPasswordAPI = (email) => {
    const config ={
        url:'http://localhost:3000/login'
    };
    return new Promise((resolve, reject) => {
        auth.sendPasswordResetEmail(email, config)
        .then(() => {
            resolve();
        })
        .catch(()=>{
            const err = ['Este email nao esta cadastrado.'];
            reject(err);
        });


    });

};