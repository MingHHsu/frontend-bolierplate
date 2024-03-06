import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "pages";
import { MainLayout } from "components/MainLayout";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: '/user',
        element: <div>user</div>,
      },
    ],
  },
])