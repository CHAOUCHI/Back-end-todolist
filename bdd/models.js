const { DataTypes } = require("sequelize");

const TodoLists = function(sequelize){
    sequelize.define("TodoLists",{
        name : {
            type: DataTypes.STRING(255),
            allowNull:false
        },
        tasks : {
            type : DataTypes.JSON,
            allowNull : false
        }
    });
}

module.exports.TodoLists = TodoLists;