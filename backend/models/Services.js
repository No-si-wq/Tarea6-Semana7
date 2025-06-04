import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    edad:{
        type: Number,
        required: true,
        trim: true
    }
})

const Services = mongoose.model('Services', servicesSchema);
export default Services;