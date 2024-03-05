export type authUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  bio: string;
  favourites: [];
};

export type authToken = {
  accessToken: string;
  refreshToken: string;
};

export type authData = {
  user: authUser;
  token: authToken;
};

type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;
export type authContextValue = {
  authUser: authUser | null;
  setAuthUser: Setter<authUser | null>;
  authToken: authToken | null;
  setAuthToken: Setter<authToken | null>;
};
