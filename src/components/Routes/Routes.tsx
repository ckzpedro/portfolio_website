import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Pages/Home";
import Project1 from "../Pages/Project1";
import Project2 from "../Pages/Project2";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: "proj1", element: <Project1 /> },
            { path: "proj2", element: <Project2 /> },
        ]
    }
])