
import {useAdminAuth} from './../clienteHooks';

const AdminComAuth = props => useAdminAuth(props)&& props.children;

export default AdminComAuth;
