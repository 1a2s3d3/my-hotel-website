import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Prices = lazy(() => import("./pages/Prices"));
const Contact = lazy(() => import("./pages/Contact"));
const Book = lazy(() => import("./pages/Book"));
const Login = lazy(() => import("./pages/Login"));

function PrivateRoute({ children }) {
  const loggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return loggedIn
    ? children
    : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>

      {/* ALWAYS SHOW NAVBAR */}
      <Navbar />

      <Suspense
        fallback={
          <div className="text-center mt-20 text-xl">
            Loading...
          </div>
        }
      >

        <Routes>

          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />

          <Route
            path="/services"
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            }
          />

          <Route
            path="/prices"
            element={
              <PrivateRoute>
                <Prices />
              </PrivateRoute>
            }
          />

          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />

          <Route
            path="/book"
            element={
              <PrivateRoute>
                <Book />
              </PrivateRoute>
            }
          />

        </Routes>

      </Suspense>

    </Router>
  );
}

export default App;
