import { store } from '@/redux/store';

export type RootStore = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
