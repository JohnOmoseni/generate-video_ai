import { getCurrentUser } from "@/lib/appwrite";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Models } from "react-native-appwrite";

interface AuthContextProps {
  isAuthenticated: boolean;
  user: Models.Document | null;
  isLoading?: boolean;
  setIsAuthenticated?: Dispatch<SetStateAction<boolean>>;
  setUser?: Dispatch<SetStateAction<Models.Document | null>>;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<Models.Document | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // if we've logged in before, it will give us access to the current user
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsAuthenticated(true);
          setUser(res);
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return context;
};
