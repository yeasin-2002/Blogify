import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer, Nav } from './components/Global';
import {
  CreateBlog,
  Home,
  LogIn,
  NotFound,
  Profile,
  Register,
  RootErrorBoundary,
  singleBlog,
} from './page';

const router = createBrowserRouter([
  { path: '/', Component: Home, errorElement: <RootErrorBoundary /> },
  { path: '/create-blog', Component: CreateBlog },
  { path: '/register', Component: Register },
  { path: '/login', Component: LogIn },
  { path: '/profile', Component: Profile },
  { path: '/single-blog/:id', Component: singleBlog },
  { path: '*', Component: NotFound },
]);

const App = () => {
  return (
    <Fragment>
      <Nav />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
};

export default App;
