const express = require("express");
const crud=require("../db/crud");
const route =express.Router();
const path=require("path");
const GoogleImages = require('google-images');
 
const client = new GoogleImages('007282746645355992602:z7pbifuk0tk', 'AIzaSyC07zHyTPkYN7FzJgYKqpmRvkOm56MuHcc');
route.post('/images',(request,response)=>{
    var keyword=request.body.search;
    crud.addKey(keyword,response);
   response.render('images',{"key":keyword});
})
module.exports=route;