import { services } from '../data/beautyServices.js'
import Services from '../models/Services.js';
import { validateObjectId, handleNotFoundError } from '../utils/index.js';

const createService = async (req, res) => {
    if(Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatorios');
        return res.status(400).json({ msg: error.message })
    }
    try{
        const service = new Services(req.body);
        await service.save();
        res.json({ msg: 'Registro almacenado correctamente' });
    } catch (error) {
        console.error(error);
    }
}

const getServices = async (req, res) => {
   try{
    const services = await Services.find()
    res.json(services)
   } catch (error) {
    console.error(error);
   }
}

const getServiceByID = async (req, res) => {
    const { id } = req.params;
    //Validar Object id (Llamada de funcion desde utils)
    if(validateObjectId(id, res)) return

    //Validar que exista
    const service = await Services.findById(id);
    if(!service) return handleNotFoundError('El servicio no existe!!!', res)

    //Mostrar el Servicio
    res.json(service);
}

const updateService = async (req, res) => {
    const { id } = req.params;
    //Validar Object ID
    if(validateObjectId(id, res)) return

    //Validar que exista
    const service = await Services.findById(id);
    if(!service) return handleNotFoundError('El servicio no existe!!!', res)

    //Escribir valores nuevos
    service.nombre = req.body.nombre || service.nombre
    service.edad = req.body.edad || service.edad

    try {
        await service.save()
        res.json({ msg: 'Registro actualizado correctamente' })
    } catch (error) {

    }
}

//Eliminar servicio
const deleteService = async (req, res) => {
    const { id } = req.params;
    //Validar Object ID
    if(validateObjectId(id, res)) return

    //Validar que exista
    const service = await Services.findById(id);
    if(!service) return handleNotFoundError('El servicio no existe!!!', res)

    try{
        await service.deleteOne();
        res.json({ msg: 'Registro eliminado correctamente' })
    } catch (error) {
        console.error(error);
    }
}

export { createService, getServices, getServiceByID, updateService, deleteService };