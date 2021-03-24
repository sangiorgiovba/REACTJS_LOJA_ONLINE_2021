import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



const mapState =({ user }) => ({
    currentUser: user.currentUser
});

const useAuth = props => {
    const { currentUser } = useSelector(mapState);
    const history = useHistory();

    useEffect(()=>{
        if(!currentUser){
            history.push('/login');
        }

    }, [currentUser]);

    return currentUser;
};

export default useAuth;
