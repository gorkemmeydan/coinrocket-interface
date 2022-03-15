import { createContext, FC, useContext, useState } from 'react';

export interface AuthContext {
  email?: string;
  setEmail: (email?: string) => void;
}

export const AuthContextImpl = createContext<AuthContext>(null!);

export function useAuth() {
  return useContext(AuthContextImpl);
}

interface AuthProviderProps {
  initialData?: string;
}

export const AuthProvider: FC<AuthProviderProps> = ({
  children,
  initialData,
}) => {
  const [email, setEmail] = useState(initialData);

  return (
    <AuthContextImpl.Provider value={{ email, setEmail }}>
      {children}
    </AuthContextImpl.Provider>
  );
};
