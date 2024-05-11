import { Router } from "express";
import { ping,inicio,proceso,borrar,completado } from "../controllers/index.controller.js";


const router = Router()

router.get('/ping',ping);

router.get('/',inicio);

router.post('/procesar-dato',proceso);

router.post('/proceso-delete',borrar);

router.post('/proceso-completado',completado);

export default router;