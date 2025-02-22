import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, setDoc } from 'firebase/firestore';

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  // Register new user
  async register({ fullName, email, password }: RegisterData) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with full name
      await updateProfile(user, {
        displayName: fullName,
      });

      // Create user document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        fullName,
        email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return user;
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(error.message);
    }
  },

  // Login user
  async login({ email, password }: LoginData) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update last login in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        lastLogin: new Date().toISOString(),
      }, { merge: true });

      return user;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message);
    }
  },

  // Logout user
  async logout() {
    try {
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          lastLogout: new Date().toISOString(),
        }, { merge: true });
      }
      await signOut(auth);
    } catch (error: any) {
      console.error('Logout error:', error);
      throw new Error(error.message);
    }
  },

  // Reset password
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      console.error('Reset password error:', error);
      throw new Error(error.message);
    }
  },
}; 