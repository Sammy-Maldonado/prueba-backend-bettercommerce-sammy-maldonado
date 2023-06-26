import mongoose from "mongoose";

const collection = "communes";

const schema = new mongoose.Schema({
  id: Number,
  communes: String,
  region_id: Number,
},{timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});

const communesModel = mongoose.model(collection, schema);

export default communesModel;