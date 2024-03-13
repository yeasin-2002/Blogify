import { Route, Routes } from "react-router-dom";

import {
  Footer,
  GlobalProvider,
  Nav,
  PrivateRoute,
  RootNotFound,
} from "./components";

import {
  CreateBlog,
  Edit,
  Home,
  LogIn,
  Profile,
  Register,
  RootErrorBoundary,
  SingleBlog,
} from "./page";

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

        <Route element={<PrivateRoute />}>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/write" element={<CreateBlog />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/blog/:id" element={<SingleBlog />} />

        <Route path="*" element={<RootNotFound />} />
      </Routes>

      <Footer />
    </GlobalProvider>
  );
};

export default App;
