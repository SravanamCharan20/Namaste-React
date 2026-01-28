import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./Components/Error";
import { lazy,Suspense } from "react";

const About = lazy(() => import("./pages/About"));

const router = createBrowserRouter([
    {
        element : <App/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/about",
                element : <Suspense fallback={<h1>Loading ...</h1>}><About/></Suspense>
            },
            {
                path : "/contact",
                element : <Contact/>
            }
        ]
    }
])

export default router;