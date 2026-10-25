import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser, initialAdminUsers } from '@rancer/shared-data';

interface AuthContextType {
  user: AdminUser | null;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  resetPassword: (email: string) => Promise<boolean>;
  isAuthenticated: boolean;
  switchRole: (role: 'Super Admin' | 'Admin' | 'Editor') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('rancer_admin_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        localStorage.removeItem('rancer_admin_user');
      }
    }
  }, []);

  const login = async (email: string, pass: string) => {
    // Basic verification - password check
    const trimmed = email.toLowerCase().trim();
    const matchedUser = initialAdminUsers.find((u) => u.email.toLowerCase() === trimmed);

    if (matchedUser && pass.length >= 6) {
      const activeUser = { ...matchedUser, lastLogin: 'Just now' };
      setUser(activeUser);
      localStorage.setItem('rancer_admin_user', JSON.stringify(activeUser));
      return { success: true };
    }

    // Default fallback allow login for demo if email has @ and pass >= 6
    if (email.includes('@') && pass.length >= 6) {
      const demoUser: AdminUser = {
        id: 'user-custom',
        name: email.split('@')[0].toUpperCase(),
        email,
        role: 'Super Admin',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        lastLogin: 'Just now'
      };
      setUser(demoUser);
      localStorage.setItem('rancer_admin_user', JSON.stringify(demoUser));
      return { success: true };
    }

    return { success: false, error: 'Invalid credentials. Password must be at least 6 characters.' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rancer_admin_user');
  };

  const resetPassword = async (email: string) => {
    // Simulated secure reset token dispatch
    console.log(`Password reset link dispatched to: ${email}`);
    return true;
  };

  const switchRole = (role: 'Super Admin' | 'Admin' | 'Editor') => {
    if (user) {
      const updated = { ...user, role };
      setUser(updated);
      localStorage.setItem('rancer_admin_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        resetPassword,
        isAuthenticated: !!user,
        switchRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
