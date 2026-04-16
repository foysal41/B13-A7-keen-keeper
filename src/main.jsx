import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import NotFound from "./components/Global-Components/NotFound";
import FriendsDetails from "./Pages/FriendsDetails";
import { ToastContainer } from "react-toastify";
import Timeline from "./Pages/Timeline";
import ContactFriendProvider from "./context/ContactFriendProvider";
import StateAnalytics from "./Pages/StateAnalytics";

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
        path: "/friends-details/:id",
        Component: FriendsDetails,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/Stats",
        Component: StateAnalytics,
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactFriendProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </ContactFriendProvider>
  </StrictMode>,
);
