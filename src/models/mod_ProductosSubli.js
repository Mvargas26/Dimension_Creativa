const mongoose = require('mongoose');

const Schema_Productos_Subli = new mongoose.Schema(
    {
    Nombre: {type: String},
    Detalle: {type: String},
    Precio: {type: String},
    Imagen: {type: String}
    },{versionKey:false})

    module.exports= mongoose.model('mod_Productos_Subli',Schema_Productos_Subli);