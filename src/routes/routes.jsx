import ErrorPage from "./error-page";
import About from "../components/About/About";
import App from "../App";
import Contact from "../components/Contact/Contact";

const links = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about/",
    element: <About />,
  },
  {
    path: "contact/",
    element: <Contact/>,
  }
];

export default links;