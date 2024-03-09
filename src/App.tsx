import { Route, Routes } from "react-router-dom";
import { Footer, GlobalProvider, Nav } from "./components/Global";
import { PrivateRoute } from "./components/routes";
import {
  CreateBlog,
  Home,
  LogIn,
  NotFound,
  Profile,
  Register,
  RootErrorBoundary,
  SingleBlog,
  TestRoute,
} from "./page";
import { Edit } from "./page/Edit";

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

        <Route path="/test" element={<TestRoute />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </GlobalProvider>
  );
};

export default App;
