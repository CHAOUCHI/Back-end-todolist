const express = require("express");
const {Sequelize,DataTypes} = require("sequelize");
const app = express();

const sequelize = new Sequelize("todolist","todolist_admin","todolist_admin",{
    dialect:"mariadb"
});

const TodoList = sequelize.define("TodoList",{
    task : DataTypes.JSON
});
sequelize.sync();

app.use(express.json());

/**
 * Route : /api/lists
 * Results : [
 *  ...{ 
 *     name  : string
 *     tasks : [
 *          text : string,
 *          cross : boolean
 *      ]
 *  }
 * ]
 */
app.get("/api/lists",async (req,res)=>{
    let lists = [
        { 
            name  : "string",
            tasks : [
                "string",
                "boolean"
            ]
        },
        { 
            name  : "string",
            tasks : [
                "string",
                "boolean"
            ]
        },
        { 
            name  : "string",
            tasks : [
                "string",
                "boolean"
            ]
        }
    ];
    const todolists = await TodoList.findAll();
    res.status(200).json(todolists)
});
app.use("/api",(req,res)=>{
    let routes = `
        <h1>Routes dispo</h1>
        <ul>
            <li> /api/lists </li>
            <li> /api/lists/id </li>
        </ul>
    `;
    res.status(404).send(routes);
});
app.use((req,res)=>{
    console.log("Reach 404");
    res.status(404).json("Ressource invalid");
});
app.listen(3000,function(){
    console.log(`Serveur start on localhost:3000`)
});