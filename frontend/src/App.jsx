import React from "react";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { useAuthStore } from "./store/useAuthStore";
import Toaster from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore.js";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      // <div className='flex items-center justify-center h-screen'>
      //     <Loader className='size-10 animate-spin' />
      // </div>

      <div className="flex items-center justify-center h-screen">
        <span
          className="
      loading loading-dots
      w-20 h-20            // Mobile default
      sm:w-24 sm:h-24      // Small (≥ 640px)
      md:w-32 md:h-32      // Medium (≥ 768px)
      lg:w-40 lg:h-40      // Large (≥ 1024px)
      xl:w-48 xl:h-48      // Extra large (≥ 1280px)
      bg-accent
    "
        ></span>
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
