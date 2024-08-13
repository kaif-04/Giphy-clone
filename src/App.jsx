import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/Home";
import GifPage from "./pages/single-gif";
import Favorites from "./pages/favorites";
import Search from "./pages/search";
import Category from "./pages/category";
import GifProvider from "./context/gif-context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return (
  <GifProvider>
  <RouterProvider router={router}/>
  </GifProvider>
  );
}

export default App;
