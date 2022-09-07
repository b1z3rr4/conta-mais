import { Router } from "express";
import BankAccountController from "../../api/controllers/BankAccountController.js";
import authValidate from "../../api/middlewares/authValidate.js";

const routesBankAccount = Router();

routesBankAccount.get("/bank", authValidate, BankAccountController.listBank);
routesBankAccount.post("/bank", authValidate, BankAccountController.createBank);
routesBankAccount.put("/bank/:id", authValidate, BankAccountController.updateBank);
routesBankAccount.delete("/bank/:id", authValidate, BankAccountController.deleteBank);

export default routesBankAccount;
