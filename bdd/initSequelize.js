const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("todolist","root",null,{
    dialect:"mysql"
});
sequelize.sync({force:false});

module.exports.sequelize = sequelize;