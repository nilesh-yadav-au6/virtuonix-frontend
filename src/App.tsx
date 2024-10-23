import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const CompanyProfile = lazy(() => import("./pages/CompanyProfile"));
const RegisteredUser = lazy(() => import("./pages/RegisteredUsers"));
const Movies = lazy(() => import("./pages/Movies"));

export type AuthenticationContextType = {
  isAuthenticated: boolean;
  setIsauthenticated: (value: React.SetStateAction<boolean>) => void;
};

export const AuthContext = React.createContext<AuthenticationContextType>({
  isAuthenticated: false,
  setIsauthenticated: () => {},
});

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsauthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = document.cookie.split("=")[1];
    setIsauthenticated(Boolean(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsauthenticated }}>
      <>
        <Router>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/company-profile" element={<CompanyProfile />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/registered-users" element={<RegisteredUser />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </>
    </AuthContext.Provider>
  );
};

export default App;
