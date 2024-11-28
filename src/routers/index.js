// layout
import { HeaderOnly } from '~/layouts';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//route config
import configs from '~/configs';
const publicRoutes = [
    { path: configs.Routes.home, Component: Home },
    { path: configs.Routes.following, Component: Following },
    { path: configs.Routes.profile, Component: Profile },
    { path: configs.Routes.upload, Component: Upload, layout: HeaderOnly },
    { path: configs.Routes.search, Component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
