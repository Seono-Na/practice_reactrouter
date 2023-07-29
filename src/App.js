import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>Hello World!</p>,
    errorElement: <p>Not Found🫢</p>,
  },
  {
    path: "/mypage",
    element: <p>my page</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
