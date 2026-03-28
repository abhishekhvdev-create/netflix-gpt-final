import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/login";
import Header from "./components/Login/header";
import Browse from "./components/Browse/browse";

function App() {
  return (
    <>
      <RouterProvider router={approuter} />;
    </>
  );
}
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default App;
