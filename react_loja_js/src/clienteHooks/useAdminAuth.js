import{ useEffect } from 'react';
import{ useSelector } from 'react-redux';
import{ useHistory } from 'react-router-dom';
import { checarUserIsAdmin } from './../Utilidades';
const mapState = ({ user })=>({
  currentUser: user.currentUser
});

const useAdminAuth = props =>{
    const { currentUser }= useSelector(mapState);
    const history = useHistory();

    useEffect(() => {
        if (!checarUserIsAdmin(currentUser)){
            history.push('/login');
        }

    }, [currentUser]);
    return currentUser;
}

export default useAdminAuth;