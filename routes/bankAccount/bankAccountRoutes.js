import { Router } from "express";
import BankAccountController from "../../api/controllers/BankAccountController.js";
import authValidate from "../../api/middlewares/authValidate.js";

const routesBankAccount = Router();

routesBankAccount.get("/bank", BankAccountController.listBank);
routesBankAccount.post("/bank", BankAccountController.createBank);
routesBankAccount.put("/bank/:id", BankAccountController.updateBank);
routesBankAccount.delete("/bank/:id", BankAccountController.deleteBank);

export default routesBankAccount;
