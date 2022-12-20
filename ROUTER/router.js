import express from "express";
import { allcustomers, newcustomer, singlecustomer, updatecustomer } from "../CONTROLLER/controller.js";
const neparouter = express.Router();
neparouter.get('/light', allcustomers)
neparouter.get('/light/:id', singlecustomer)
neparouter.patch('/light/:id', updatecustomer)
neparouter.post('/light', newcustomer)
export default neparouter;