import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Email from "./pages/Email";
import Card from "./pages/Card";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Clipboard from "./pages/Clipboard";
import Studio from "./pages/Studio";
import store from "./store/store";
import { Provider } from "react-redux";
import Shortly from "./pages/Shortly";
import Testimonial from "./pages/Testimonial";
import Fylo from "./pages/Fylo";
import BookMark from "./pages/BookMark";
import RootNavigation from "./pages/RootNavigation";

const router = createBrowserRouter([
  // { path: "/", element: <Email /> },
  // { path: "/card", element: <Card /> },
  // { path: "/pricing", element: <Pricing /> },
  // { path: "/gallery", element: <Gallery /> },
  // { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <RootNavigation />,
    children: [
      { index: true, element: <Fylo /> },
      { path: "/clip", element: <Clipboard /> },
      { path: "/studio", element: <Studio /> },
      { path: "/shortly", element: <Shortly /> },
      { path: "/testimonial", element: <Testimonial /> },

      { path: "/bookmark", element: <BookMark /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
