import communesModel from "../models/communes.js";

export default class CommunesManager {

  getCommunes = (params) => {
    return communesModel.find(params);
  }

  getCommuneById = (id) => {
    return communesModel.find({ region_id: id })
  }

  createCommune = (commune) => {
    return communesModel.create(commune)
  }

  updateCommune = (id, commune) => {
    return communesModel.findByIdAndUpdate(id, {$set: commune})
  }

  deleteCommune = (id) => {
    return communesModel.findByIdAndDelete(id);
  };
};