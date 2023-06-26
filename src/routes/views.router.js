import { Router } from "express";
import RegionsManager from "../dao/mongo/Managers/RegionsManager.js";
import CommunesManager from "../dao/mongo/Managers/CommunesManager.js"

const router = Router();

const regionsServices = new RegionsManager();
const communesServices = new CommunesManager();

router.get('/', async (req, res) => {
  try {
      const regions = await regionsServices.getRegions().lean();
      res.render('regions', { regions });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar las regiones');
  }
});
export default router;