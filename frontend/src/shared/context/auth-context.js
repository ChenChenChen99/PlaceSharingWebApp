import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  toekn: null,
  login: () => {},
  logout: () => {}
});
