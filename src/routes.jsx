import Home from "./pages/home/Home";
import Service from "./pages/services/service/Service";
import Services from "./pages/services/Services";
import Doctors from "./pages/doctors/Doctors";
import Doctor from "./pages/doctors/doctor/Doctor";
const routes = [
  { path: "/", element: <Home /> },
  { path: "services", element: <Services /> },
  { path: "services/:serviceID", element: <Service /> },
  { path: "doctors", element: <Doctors /> },
  { path: "doctors/:doctorID", element: <Doctor /> },
];

export default routes;
