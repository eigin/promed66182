
import HomePage from '../pages/home.f7.html';
import TablePage from '../pages/table.f7.html';
import SourcePage from '../pages/source.f7.html';
import ChannelPage from '../pages/channel.f7.html';
import ScriptPage from '../pages/script.f7.html';
import ErrorPage from '../pages/error.f7.html';
import ComparePage from '../pages/compare.f7.html';
import ConfigPage from '../pages/config.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/table/',
    component: TablePage,
  },
  {
    path: '/source/',
    component: SourcePage,
  },
  {
    path: '/channel/',
    component: ChannelPage,
  },
  {
    path: '/script/',
    component: ScriptPage,
  },
  {
    path: '/error/',
    component: ErrorPage,
  },
  {
    path: '/compare/',
    component: ComparePage,
  },
  {
    path: '/config/',
    component: ConfigPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
