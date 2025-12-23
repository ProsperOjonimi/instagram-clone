import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AppLayout from "./components/appLayout";
import Home from "./pages/home";
import AuthLayout from "./components/authLayout";
import SignUpForm from "./pages/auth/signup/signUpForm";
import LoginForm from "./pages/auth/login/loginForm";
import ForgotPassword from "./pages/auth/login/forgotPassword";
import { useLanguage } from "./context/languageContext";

function App() {
  const { language } = useLanguage();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
