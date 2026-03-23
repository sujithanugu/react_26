import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//const par = React.createElement("h1",{id: "test"}, "Helloo");
//const head = React.createElement("div", {id: "container"}, React.createElement("h1", {id: "h1txt"},"Hello" ))
// const par = <h1 className="heading">Hello World! 🌏</h1>
// const Head = () => (
//     <div id="container1">
//         <h1 id="test1">Hello Fnt component!!</h1>
//         {par}
//         <InsideHead/>
//     </div>
// )
// const InsideHead = () => (
//     <div id="container2">
//         <h1 id="test2">Hello Fnt component2!!</h1>
//     </div>
// )
// console.log(par);
// console.log(Head);
