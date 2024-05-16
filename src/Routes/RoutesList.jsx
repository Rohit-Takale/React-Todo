import Converter from "../pages/Converter";
import DarkAndLight from "../pages/DarkAndLight";
import LikeMyphoto from "../pages/LikePhoto";
import Mecical from "../pages/Mecical";
import TestimonialsApp from "../pages/TestimonialsApp";
import Counter from "../pages/counter";
import Form from "../pages/form";
import Home from "../pages/home";
import Weather from "../pages/weather";
// import Medicines from "../pages/Medicines";

export const routeList = [
    { path: "/home", element: <Home /> },
    { path: "/counter", element: <Counter /> },
    { path: "/", element: <Form /> },
    { path: "/weather", element: <Weather /> },
    { path: "/likephoto", element: <LikeMyphoto /> },
    { path: "/testimonials", element: <TestimonialsApp /> },
    { path: "/darkandlight", element: <DarkAndLight /> },
    {path:"/converter", element:<Converter/>},
    // {path:"/meds", element:<Medicines/>}
    {path: '/Medical', element:<Mecical/>}
    
  ];

