//? react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = new QueryClient();

//? redux
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

//? react-toastify
import { AuthProvider } from '@/context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalProvider = ({ children }: OnlyChild) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </>
  );
};
