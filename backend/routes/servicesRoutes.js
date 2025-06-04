import express from 'express';
import { createService, getServiceByID, getServices, updateService, deleteService  } from '../controllers/servicesController.js';

const router = express.Router()

router.route('/')
    .post(createService)
    .get(getServices)

router.route('/:id')
    .get(getServiceByID)
    .put(updateService)
    .delete(deleteService)

export default router