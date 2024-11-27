// layout
import { HeaderOnly } from '~/components/Layouts';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//route config
import Routes from '~/configs/Routes';
const publicRoutes = [
    { path: Routes.home, Component: Home },
    { path: Routes.following, Component: Following },
    { path: Routes.profile, Component: Profile },
    { path: Routes.upload, Component: Upload, layout: HeaderOnly },
    { path: Routes.search, Component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
