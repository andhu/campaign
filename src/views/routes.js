import App from './app';
import HomePage from './pages/home';
import AboutPage from './pages/about';

export const paths = {
  ROOT: '/',
  ABOUT: '/about',
  SIGN_IN: '/sign_in',
  SURVEY: '/survey'
};

export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: HomePage
        }
      },
      {
        path: paths.ABOUT,
        component: AboutPage
      }
    ]
  };
};

