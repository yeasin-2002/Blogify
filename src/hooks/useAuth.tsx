import { AuthContext } from '@/context';
import { authContextValue } from '@/types';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext) as authContextValue;
