import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import About from "./routes/aboutRoute";
import Contacts from "./routes/contactRoute";
import Products from "./routes/productsRoute";
import Videos from "./routes/videosRoute";

export const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/about', element: <About />},
    {path: '/contact', element: <Contacts />},
    {path: '/products', element: <Products />},
    {path: '/videos', element: <Videos />},
  ]);