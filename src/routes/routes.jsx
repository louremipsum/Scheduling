import ErrorPage from "./error-page";
import Smth from "../components/About/Smth";
import App from "../App";

const links = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about/:aboutId",
    element: <Smth />,
  },
];

export default links;