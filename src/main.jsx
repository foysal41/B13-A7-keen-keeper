import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import NotFound from "./components/Global-Components/NotFound";
import FriendsDetails from "./Pages/FriendsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/friends-details",
        Component: FriendsDetails,
      },
      {
        path: "/timeline",
        element: <h1>Timeline</h1>,
      },
      {
        path: "/Stats",
        element: <h1>Stats</h1>,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
