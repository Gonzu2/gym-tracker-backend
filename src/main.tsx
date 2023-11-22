import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Importing global styles
import "./globalStyles.css";
import { ThemeProvider } from "@/components/theme-provider";

//Possbile pages to be loaded depending on route
import Home from "./Home.tsx";
import Dashboard from "./Dashboard.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx";
import PageNotFound from "./PageNotFound.tsx";

//Loading external components that will always be displayed.
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

//Router config
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
