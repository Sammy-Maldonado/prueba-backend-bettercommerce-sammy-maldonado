import regionsModel from "../models/regions.js";

export default class RegionsManager {

  /* Crud de Regions */

  getRegions = (params) => {
    return regionsModel.find(params);
  }

  getRegionBy = (params) => {
    return regionsModel.findOne(params)
  }

  createRegion = (region) => {
    return regionsModel.create(region)
  }

  updateRegion = (id, region) => {
    return regionsModel.findByIdAndUpdate(id, {$set: region})
  }

  deleteRegion = (id) => {
    return regionsModel.findByIdAndDelete(id);
  };
};