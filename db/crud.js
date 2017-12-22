var keySchema=require("./schema");
var path=require("path");
const keyOperations={
addKey:function(keyword,response){
        var keySchObject=new keySchema({searchkey:keyword})
        keySchObject.save(function(err,result){
            if(err){
                console.log(err)
            }
            else{
                console.log("registered successfully");
            }
        })
        
    }
}
module.exports=keyOperations;