import { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthState {
  user: User | null;
  isLoading: boolean;
}

interface AuthError {
  code: string;
  message: string;
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState({ user, isLoading: false });
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      const firebaseError = error as AuthError;
      throw new Error(firebaseError.message);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      const firebaseError = error as AuthError;
      throw new Error(firebaseError.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as AuthError;
      throw new Error(firebaseError.message);
    }
  };

  return {
    user: state.user,
    isLoading: state.isLoading,
    signIn,
    signUp,
    logout,
  };
} 