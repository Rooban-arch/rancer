import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import AdminLayout from './components/AdminLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ServicesManagementPage from './pages/ServicesManagementPage';
import WorkCategoriesPage from './pages/WorkCategoriesPage';
import PortfolioManagementPage from './pages/PortfolioManagementPage';
import TestimonialsManagementPage from './pages/TestimonialsManagementPage';
import BlogManagementPage from './pages/BlogManagementPage';
import LeadsManagementPage from './pages/LeadsManagementPage';
import SettingsPage from './pages/SettingsPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="services" element={<ServicesManagementPage />} />
        <Route path="categories" element={<WorkCategoriesPage />} />
        <Route path="portfolio" element={<PortfolioManagementPage />} />
        <Route path="testimonials" element={<TestimonialsManagementPage />} />
        <Route path="blog" element={<BlogManagementPage />} />
        <Route path="leads" element={<LeadsManagementPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
