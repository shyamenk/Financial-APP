import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import Logout from "../views/Logout";
import { useUser } from "../context/AuthContext";
import NewTransaction from "../components/pages/NewTransaction";
import NotAuthorized from "../components/pages/NotAuthorized";
import ViewTransaction from "../components/pages/ViewTransaction";
import MultiForm from "../components/pages/MultiForm";
import LoginPage from "../components/pages/Login";
import RegisterPage from "../components/pages/Register";
import Home from "../components/pages/Home";
import { useEffect, useState } from "react";

const AppRoutes = () => {
  const { user } = useUser();

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (user?.role && user?.role.trim() === "admin") {
      setIsAdmin(true);
    }
    if (user?.role && user?.role.trim() === "user") {
      setIsAdmin(false);
    }
  }, [user?.role]);

  console.log(isAdmin);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/new-transaction"
          element={isAdmin ? <NewTransaction /> : <NotAuthorized />}
        />
        <Route
          path="/view-transactions"
          element={user ? <ViewTransaction /> : <LoginPage />}
        />
        <Route
          path="/multiform"
          element={user ? <MultiForm /> : <LoginPage />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/view-transactions" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/view-transactions" /> : <RegisterPage />
          }
        />
        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
