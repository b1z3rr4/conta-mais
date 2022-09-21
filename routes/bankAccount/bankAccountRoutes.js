import { Router } from "express";
import BankAccountController from "../../api/controllers/BankAccountController.js";
import authValidate from "../../api/middlewares/authValidate.js";
import bankAccountValidator from "../../api/middlewares/bankAccountValidator.js";

const routesBankAccount = Router();

routesBankAccount.get("/bank/list", authValidate, bankAccountValidator.getValidator, BankAccountController.listBank);
routesBankAccount.post("/bank", authValidate, bankAccountValidator.postValidator, BankAccountController.createBank);
routesBankAccount.put("/updateBank/:id", authValidate, bankAccountValidator.putValidator, BankAccountController.updateBank);
routesBankAccount.delete("/deleteBank/:id", authValidate, bankAccountValidator.deleteValidator, BankAccountController.deleteBank);

export default routesBankAccount;
