import ErrorPage from "./error-page";
import About from "../components/About/About";
import App from "../App";

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
];

export default links;