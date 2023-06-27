import mongoose from "mongoose";

const collection = "regions";

/* Esquema para integrar regiones a la base de datos */

const schema = new mongoose.Schema({
  id: Number,
  region: String,
},{timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});

const regionsModel = mongoose.model(collection, schema);

export default regionsModel;