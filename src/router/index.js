/**
 *  路由配置
 */
import Home from '../components/home.jsx'
import Text from '../components/test.jsx';
import Text2 from '../components/test2.jsx';

const router = [
  { path: '/', component: Home, exact: true },
  { path: '/test', component: Text, exact: true },
  { path: '/test2', component: Text2, exact: true },
];

export default router;