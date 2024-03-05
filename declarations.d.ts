import { store } from '@/redux/store';

declare global {
  type OnlyChild = {
    children: React.ReactNode;
  };

  type ReduxStore = ReturnType<typeof store.getState>;
  type ReduxDispatch = typeof store.dispatch;

  interface DivProps extends React.ComponentProps<'div'> {}
  interface ButtonProp extends React.ComponentProps<'button'> {}
  interface ButtonPropWithChild extends React.ComponentProps<'button'> {
    children: React.ReactNode;
  }
  interface DivPropsWithChild extends React.ComponentProps<'div'> {
    children: React.ReactNode;
  }
}

export {};
