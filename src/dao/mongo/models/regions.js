import mongoose from "mongoose";

const collection = "regions";

const schema = new mongoose.Schema({
  id: Number,
  region: String,
},{timestamps:{createdAt:'created_at', updatedAt:'updated_at'}});

const regionsModel = mongoose.model(collection, schema);

export default regionsModel;