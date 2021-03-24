import { useAuth } from './../clienteHooks';


const ComAuth = props => useAuth(props) && props.children;

export default ComAuth;

