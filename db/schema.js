const mongoose=require("./connection");
var Schema=mongoose.Schema;
var keyword=new Schema({searchkey:{type:String,require:true,unique:true}});
var keySchema=mongoose.model("keyword",keyword);
module.exports=keySchema;