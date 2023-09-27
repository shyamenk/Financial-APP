import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

type User = {
  name: string;
  email: string;
  role: string;
  password: string;
};
type AuthContextType = {
  user: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ token?: string; error?: string }>;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ data?: User[]; error?: string }>;

  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ data?: User[] | undefined; error?: string | undefined }> => {
    const formData = {
      name,
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.message === "User registered successfully") {
        toast.success("User registered successfully");
        return { data };
      } else {
        toast.error(data.message);
        return { error: data.message };
      }
    } catch (error) {
      toast.error("An error occurred during registration");
      return { error: "An error occurred during registration" };
    }
  };

  const login = async (
    email: string,
    password: string
  ): Promise<{ token?: string; error?: string }> => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status === 401) {
        toast.error("Invalid email or password");
        return { error: "Invalid email or password" };
      }

      if (res.ok) {
        const data = await res.json();
        setUser({ ...data.user });
        localStorage.setItem("token", data.token);
        toast.success("Login Successful redirect to Home");
        return { token: data.token };
      }

      return { error: "An error occurred" };
    } catch (error) {
      toast.error("An error occurred");
      return { error: "An error occurred" };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
