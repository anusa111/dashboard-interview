import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  const Routes = useRoutes(routes);
  return <>{Routes}</>;
};

export default App;
