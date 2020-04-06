/**
 *  路由配置
 */
import Home from '../components/home.jsx'
import Text from '../components/test.jsx';

const router = [
  { path: '/', component: Home, exact: true },
  { path: '/test', component: Text, exact: true }
];

export default router;