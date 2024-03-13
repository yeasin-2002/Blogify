//? react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

//? react-toastify
import { AuthProvider } from "@/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

export const GlobalProvider = ({ children }: OnlyChild) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AnimatePresence>{children}</AnimatePresence>
        </AuthProvider>
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
