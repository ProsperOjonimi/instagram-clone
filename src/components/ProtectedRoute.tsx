import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import LoadingScreen from "./LoadingScreen";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  // Load the user
  const { isLoading, isAuthenticated } = useUser();

  // while loading, show a loading spinner
  if (isLoading) return <LoadingScreen />;

  // if there is no user, redirect to the login page
  if (!isAuthenticated && !isLoading) navigate("/accounts/login");

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
