import { Router } from "express";
import BankAccountController from "../../api/controllers/BankAccountController";
import authValidate from "../../api/middlewares/authValidate";

const routesBankAccount = Router();

routesBankAccount.get("/bank", BankAccountController.listBusiness);
routesBankAccount.post("/bank", BankAccountController.createBusiness);
routesBankAccount.put("/bank/:id", BankAccountController.updateBusiness);
routesBankAccount.delete("/bank/:id", BankAccountController.deleteBusiness);

export default routesBankAccount;
