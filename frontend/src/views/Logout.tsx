import { useUser } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useUser();

  const handleLogout = () => {
    logout();
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
