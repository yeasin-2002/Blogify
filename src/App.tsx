import { Route, Routes } from 'react-router-dom';
import { Footer, GlobalProvider, Nav } from './components/Global';
import {
  CreateBlog,
  Home,
  LogIn,
  NotFound,
  Profile,
  Register,
  RootErrorBoundary,
  SingleBlog,
} from './page';

const App = () => {
  return (
    <GlobalProvider>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={<Home />}
          errorElement={<RootErrorBoundary />}
        />
        <Route path="/write" element={<CreateBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single-blog/:id" element={<SingleBlog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </GlobalProvider>
  );
};

export default App;
