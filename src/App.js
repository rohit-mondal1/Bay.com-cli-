import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./OutOfTof/Router/Mainrouter";

function App() {
  return (
    <div className="max-w-[600px] mx-auto border">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
