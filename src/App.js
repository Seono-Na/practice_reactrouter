import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import MyPage from "./pages/MyPage";
import MyPageDetail from "./pages/MyPageDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/mypage", element: <MyPage /> },
      { path: "/mypage/:mypageId", element: <MyPageDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
