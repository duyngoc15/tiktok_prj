import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layouts';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', Component: Home },
    { path: '/following', Component: Following },
    { path: '/profile', Component: Profile },
    { path: '/upload', Component: Upload, layout: HeaderOnly },
    { path: '/search', Component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
