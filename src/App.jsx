import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/Home";
import GifPage from "./pages/Single-gif";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Category from "./pages/Category";
import GifProvider from "./context/Gif-context";

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
