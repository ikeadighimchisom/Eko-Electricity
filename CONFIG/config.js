import { Sequelize } from "sequelize";
const bill = new Sequelize("olodidistrict", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export default bill;