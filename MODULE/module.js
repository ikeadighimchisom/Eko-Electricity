import { Sequelize } from "sequelize";
import bill from "../CONFIG/config.js";

const {DataTypes} = Sequelize;
const nepa = bill.define("olodiInfo", {
    nameOfCustomer: {
        type: DataTypes.STRING
    },
    nameOfstreet: {
        type: DataTypes.STRING
    }, 
    meterNumber: {
        type: DataTypes.DOUBLE
    },
    amountOfBill: {
        type: DataTypes.DOUBLE
    }, 
    amountPaid: {
        type: DataTypes.DOUBLE
    },
    totalBalance: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

export default nepa;
