/**
 *  路由配置
 */
import Home from '../components/home'
import Text from '../components/test';

const router = [
  { path: '/index.html', component: Home, exact: true },
  { path: '/test', component: Text, exact: true }
];

export default router;