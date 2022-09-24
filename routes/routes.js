import routesUser from "./user/userRoutes.js";
import routesAuth from "./auth/authRoutes.js";
import routesBusiness from "./business/businessRoutes.js";
import routesMoviments from "./moviments/movimentsRoutes.js";
import routesBankAccout from "./bankAccount/bankAccountRoutes.js";
import routesApresentation from "./publicRoutes/apresentation.js";

const routes = {
  routesUser,
  routesAuth,
  routesBusiness,
  routesMoviments,
  routesBankAccout,
  routesApresentation
};

export default routes;
