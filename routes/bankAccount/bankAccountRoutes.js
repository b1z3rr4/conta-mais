import { Router } from "express";
import BankAccountController from "../../api/controllers/BankAccountController.js";
import authValidator from "../../api/middlewares/authValidator.js";
import bankAccountValidator from "../../api/middlewares/bankAccountValidator.js";

const routesBankAccount = Router();

routesBankAccount.get("/bank", authValidator, bankAccountValidator.getValidator, BankAccountController.listBank);
routesBankAccount.post("/bank", authValidator, bankAccountValidator.postValidator, BankAccountController.createBank);
routesBankAccount.put("/bank/:id", authValidator, bankAccountValidator.putValidator, BankAccountController.updateBank);
routesBankAccount.delete("/bank/:id", authValidator, bankAccountValidator.deleteValidator, BankAccountController.deleteBank);

export default routesBankAccount;