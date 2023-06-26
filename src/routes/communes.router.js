import { Router } from "express";
import CommunesManager from "../dao/mongo/Managers/CommunesManager.js";

const communeManager = new CommunesManager();
const router = Router();

router.get('/:regionId', async (req, res) => {
    try {
      const regionId = req.params.regionId;
      const commune = await communeManager.getCommuneById(regionId);
      if (commune) {
        res.send({ status: "success", message: "Las comunas se han cargado correctamente", payload: commune });
      } else {
        res.status(400).send({status:"error", error:'Producto no encontrado'});
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "error", error: 'Error interno del servidor' })
    }
  });

export default router;