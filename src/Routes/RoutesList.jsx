import DarkAndLight from "../pages/DarkAndLight";
import LikeMyphoto from "../pages/LikePhoto";
import TestimonialsApp from "../pages/TestimonialsApp";
import Counter from "../pages/counter";
import Form from "../pages/form";
import Home from "../pages/home";
import Weather from "../pages/weather";

export const routeList = [
    { path: "/", element: <Home /> },
    { path: "/counter", element: <Counter /> },
    { path: "/form", element: <Form /> },
    { path: "/weather", element: <Weather /> },
    { path: "/likephoto", element: <LikeMyphoto /> },
    { path: "/testimonials", element: <TestimonialsApp /> },
    { path: "/darkandlight", element: <DarkAndLight /> },
  ];

