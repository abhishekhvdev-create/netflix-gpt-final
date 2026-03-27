import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/login";

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
]);

export default App;
