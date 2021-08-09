import React, { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

export type AuthProps = {
  currentUser: firebase.User | null;
  loading: boolean;
  signup: (email: string, password: string) => Promise<firebase.auth.UserCredential | void>;
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential | void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
  updateEmail: (email: string) => Promise<void> | undefined;
  updatePassword: (password: string) => Promise<void> | undefined;
};

const initialState: AuthProps = {
  currentUser: null,
  loading: true,
  signup: async (email: string, password: string) => {},
  login: async (email: string, password: string) => {},
  logout: async () => {},
  resetPassword: async (email: string) => {},
  updateEmail: async (email: string) => {},
  updatePassword: async (password: string) => {},
};

export const AuthContext = createContext<AuthProps>(initialState);

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email: string, password: string) => {
    console.log(email, password);
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email: string) => {
    return currentUser?.updateEmail(email);
  };

  const updatePassword = (password: string) => {
    return currentUser?.updatePassword(password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        loading,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
