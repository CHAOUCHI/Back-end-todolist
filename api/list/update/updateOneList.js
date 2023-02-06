const {ValidationError} = require("sequelize");

module.exports = function(sequelize,app){
    if(sequelize.models.TodoLists === undefined)
        return;

    const TodoListsModel = sequelize.models.TodoLists;

    app.post("/api/list/update",(req,res,next)=>{
        const id = req.body.id;
        const name = req.body.name;
        const tasks = req.body.tasks;
        let updatedFields = {
            name : name,
            tasks : tasks
        }
        //Removing all undefined attributs
        updatedFields = JSON.parse(JSON.stringify(updatedFields))
        TodoListsModel.update(updatedFields,{
            where:{
                id : id
            }
        })
        .then(function(nbUpdatedList){
            res.status(200).json({message:`${nbUpdatedList} list updated.`,data:nbUpdatedList});
        })
        .catch(err=>{
            //if(err in)
            if(err instanceof ValidationError)
                res.status(400).json({message:`Wrong list property.`,data:err.message});
            else{
                console.log(err.message);
                const message = "Error server, try again later.";
                const data = null;
                res.status(500).json({message,data})
            }
        })
    });
}



