//Require *
const express = require('express');
const path = require('path');//modulo encargado de unir directorios
const mongoose = require('mongoose');
require('dotenv').config();
const connect_DB = require('./db/db_Connect')

//Initialization *
const app = express();

//db Connection *
connect_DB();

const mod_Productos_Subli = require('./models/mod_ProductosSubli');
//static Flies *
app.use(express.static(path.join(__dirname,'public')));

//set Methods
app.set('views',path.join(__dirname,'public','views'));
app.set('view engine','ejs')
app.set('port',process.env.PORT || 3000);

//let Products_List =[{Nombre:'Botella'},{Nombre:'Camisa'}]

//get methods *
app.get('/',(req,res)=>res.render('view_index.ejs',{title:'Dimension Creativa || Inicio'}));

app.get('/view_products',function(req,res){
    mod_Productos_Subli.find(function(err,Products_List){
        //console.log(Products_List)
        res.render('view_products.ejs',{title:'Dimension Creativa || Productos',Products:Products_List})});
});

app.get('/agregarNuevoProducto',(req,res)=>res.render('add.ejs',{title:'Agregar'}));

app.get('/addProduct',function(req,res,next){
    var mod_Productos_Subli = new mod_Productos_Subli({
        Nombre: req.query.txtNombre,
        Detalle:req.query.txtDetalle,
        Precio:req.query.txtPrecio,
        Imagen:req.query.txtImagen
    });
    mod_Productos_Subli.save();
});//fin app.get

//server start *
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
    
})