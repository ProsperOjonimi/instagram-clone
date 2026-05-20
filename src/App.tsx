import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import AppLayout from "./components/appLayout";
import Home from "./pages/home";
import AuthLayout from "./components/authLayout";
import SignUpForm from "./pages/auth/signup/signUpForm";
import LoginForm from "./pages/auth/login/loginForm";
import ForgotPassword from "./pages/auth/login/forgotPassword";
import { useLanguage } from "./context/languageContext";
import ProtectedRoute from "./components/ProtectedRoute";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import NewPasswordForm from "./pages/auth/login/newPasswordForm";

function App() {
  const { language } = useLanguage();
  return (
    <BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route
            path="/accounts/emailsignup"
            element={<SignUpForm language={language} />}
          />
          <Route
            path="/accounts/login"
            element={<LoginForm language={language} />}
          />
          <Route
            path="/accounts/password/reset"
            element={<ForgotPassword language={language} />}
          />
          <Route
            path="/accounts/password/new"
            element={<NewPasswordForm language={language} />}
          />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#141A21",
            color: "#E6EDF3",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
