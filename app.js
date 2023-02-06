/**Base de données */
const { sequelize } = require("./bdd/initSequelize");
const models = require("./bdd/models");

/**Serveur web */
const express = require("express");
const app = express();
app.use(express.json());

// api/lists
require("./api/lists/getAllLists")(sequelize,app);
// api/list/:id
require("./api/list/getOneList")(sequelize,app);
// api/list
require("./api/list/postOneList")(sequelize,app);
// api/list/delete/:id
require("./api/list/delete/deleteOneList")(sequelize,app);
// api/list/update
require("./api/list/update/updateOneList")(sequelize,app);


/**
 * 404 route
 */
app.use((req,res)=>{
    const message = "Error 404 Ressource not founds";
    const data = null;
    res.status(404).json({message,data});
});
app.listen(4000,function(){
    console.log(`Serveur start on localhost:3000`)
});