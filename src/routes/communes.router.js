import { Router } from "express";
import CommunesManager from "../dao/mongo/Managers/CommunesManager.js";

const communeManager = new CommunesManager();
const router = Router();

/*Endpoint para obtener la información de las comunas por region_id*/
router.get('/:regionId', async (req, res) => {
  try {
    const regionId = req.params.regionId;
    
    // Verificaciones: La regionId debe ser un número válido y estar entre 1 y 16
    if (isNaN(regionId) || regionId <= 0 || regionId >= 17) {
      return res.status(400).send({ status: "error", error: "La región ID debe ser un número válido y estar entre 1 y 16" });
    }
    
    //Obtetniendo la información de las comunas en base a su region_id
    const communes = await communeManager.getCommuneById(regionId);
    if (communes) {
      res.send({ status: "success", message: "Las comunas se han cargado correctamente", payload: communes });
    } else {
      res.status(400).send({ status: "error", error: 'Comuna no encontrada' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", error: 'Error interno del servidor' })
  }
});

export default router;