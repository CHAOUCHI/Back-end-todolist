const {ValidationError} = require("sequelize");

module.exports = function(sequelize,app){
    if(sequelize.models.TodoLists === undefined)
        return;

    const TodoListsModel = sequelize.models.TodoLists;

    app.post("/api/list",(req,res,next)=>{
        const name = req.body.name;
        const tasks = req.body.tasks;

        TodoListsModel.create({
            name:name,
            tasks:tasks
        })
        .then(function(){
            res.status(200).json({message:`${name} list created.`,data:{name,tasks}});
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



