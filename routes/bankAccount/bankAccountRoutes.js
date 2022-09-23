import { Router } from "express";
import BankAccountController from "../../api/controllers/BankAccountController.js";
import authValidator from "../../api/middlewares/authValidator.js";
import bankAccountValidator from "../../api/middlewares/bankAccountValidator.js";

const routesBankAccount = Router();

routesBankAccount.get("/bank/list", authValidator, bankAccountValidator.getValidator, BankAccountController.listBank);
routesBankAccount.post("/bank", authValidator, bankAccountValidator.postValidator, BankAccountController.createBank);
routesBankAccount.put("/bank/update/:id", authValidator, bankAccountValidator.putValidator, BankAccountController.updateBank);
routesBankAccount.delete("/bank/delete/:id", authValidator, bankAccountValidator.deleteValidator, BankAccountController.deleteBank);

export default routesBankAccount;