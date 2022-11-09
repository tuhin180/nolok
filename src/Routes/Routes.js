import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Layout/Main";
import AddService from "../component/Pages/AddService/AddService";
import Blog from "../component/Pages/Blog/Blog";
import Home from "../component/Pages/Home/Home";
import AllService from "../component/Pages/Home/Service/AllService";
import DetailsPage from "../component/Pages/Home/Service/DetailsPage/DetailsPage";
import Login from "../component/Pages/Login/Login";
import MyReview from "../component/Pages/MyReview/MyReview";
import Register from "../component/Pages/Register/Register";
import ErrorPage from "../component/Pages/Shared/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },

      {
        path: "/all_service",
        loader: () => fetch("http://localhost:5000/allServices"),
        element: <AllService></AllService>,
      },

      {
        path: "/Service_Details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Service_Details/${params.id}`),
        element: <DetailsPage></DetailsPage>,
      },

      { path: "/add_service", element: <AddService></AddService> },

      { path: "/my_review", element: <MyReview></MyReview> },

      { path: "/blogs", element: <Blog></Blog> },

      { path: "/login", element: <Login></Login> },

      { path: "/register", element: <Register></Register> },
    ],
  },
]);
export default routes;
