import { Router } from "express";
import RegionsManager from "../dao/mongo/Managers/RegionsManager.js";

const regionManager = new RegionsManager();
const router = Router();

router.get('/', async (req, res) => {
  try {
    const regions = await regionManager.getRegions();
    res.status(200).send({ status: "success", message: "Las regiones se han cargado correctamente", payload: regions });
  } catch (error) {
    res.status(500).send({ status: "error", error: 'Error interno del servidor' })
  }
});

export default router;