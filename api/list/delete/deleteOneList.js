

module.exports = function(sequelize,app){
    if(sequelize.models.TodoLists === undefined)
        return;

    const TodoListsModel = sequelize.models.TodoLists;

    app.post("/api/list/delete/:id",(req,res,next)=>{
        
        
        TodoListsModel.destroy({
            where:{
                id : req.params.id
            }
        })
        .then(function(nbDeletedLists){
            const message = `${nbDeletedLists} lists deleted`;
            const data = nbDeletedLists;
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



