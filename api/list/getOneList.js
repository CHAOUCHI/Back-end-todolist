const {ValidationError} = require("sequelize");


module.exports = function(sequelize,app){
    if(sequelize.models.TodoLists === undefined)
        return;

    const TodoListsModel = sequelize.models.TodoLists;

    app.get("/api/list/:id",(req,res,next)=>{
        
        TodoListsModel.findByPk(req.params.id)
        .then(function(list){
            const message = list?"1 list found":`No list got this id : ${req.params.id}`;
            const data = list;
            res.status(200).json({message,data})
        })
        .catch(function(err){
            console.log(err.message);
            const message = "Error server, try again later.";
            const data = null;
            res.status(500).json({message,data})
        }); 
    });
}



