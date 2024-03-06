//? react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

//? react-toastify
import { AuthProvider } from "@/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";

export const GlobalProvider = ({ children }: OnlyChild) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </NextThemesProvider>
        </AuthProvider>
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
};