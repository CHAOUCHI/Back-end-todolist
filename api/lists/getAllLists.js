module.exports = function(sequelize,app){
    if(sequelize.models.TodoLists === undefined)
        return;

    const TodoListsModel = sequelize.models.TodoLists;
    app.get("/api/lists",(req,res)=>{
        TodoListsModel.findAll()
        .then(lists=>{
            res.status(200).json({message:`Finds ${lists.length} lists.`,data:lists});
        })
        .catch(err=>{
            res.status(500).json({message:`Error`,data:err.message});
        })
    });
}



