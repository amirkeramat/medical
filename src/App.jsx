import Layout from "./layout/Layout";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  const router = useRoutes(routes);
  return <Layout>{router}</Layout>;
}

export default App;
