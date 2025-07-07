import App from "@/App";
import Home from "@/pages/Home";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "/task", Component: Task },
      { path: "/user", Component: User },
    ],
  },
]);
export default router;
