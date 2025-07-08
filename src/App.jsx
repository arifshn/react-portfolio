import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "animate.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
