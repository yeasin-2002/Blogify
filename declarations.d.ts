import { store } from '@/redux/store';

declare global {
  type OnlyChild = {
    children: React.ReactNode;
  };

  type ReduxStore = ReturnType<typeof store.getState>;
  type ReduxDispatch = typeof store.dispatch;

  interface DivProps extends React.ComponentProps<'div'> {}
}

export {};

