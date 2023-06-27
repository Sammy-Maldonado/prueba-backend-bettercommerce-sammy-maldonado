import { Router } from "express";
import RegionsManager from "../dao/mongo/Managers/RegionsManager.js";

const router = Router();

/* Services */
const regionsServices = new RegionsManager();

/* Obteniendo la información de las regiones con Mongoose*/
router.get('/', async (req, res) => {
  try {
    const regions = await regionsServices.getRegions().lean(); //deshidratando la información para renderizarla
    res.render('regions', { regions, css: 'regions'});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar las regiones');
  }
});

export default router;