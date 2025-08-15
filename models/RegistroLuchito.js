const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    // NUEVO CAMPO: Para almacenar el ID del lead de Kommo
    kommoId: {
        type: String,
        required: true,
        unique: true, // Esto asegura que no haya duplicados
        index: true, // Esto hace la búsqueda por kommoId mucho más rápida
    },
    token: {
        type: String,
        required: true,
    },
    pixel: {
        type: String,
        required: true,
    },
    subdominio: {
        type: String,
        required: true,
    },
    dominio: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    fbclid: String,
    fbclidTimestamp: {
        type: Date,
        default: null
    },
    eventSentToMeta: {
        type: Boolean,
        default: false
    },
    lastEventSentAt: {
        type: Date,
        default: null
    },
    mensaje: String,
    kommoAccount: {
        type: String,
    },
    whatsappNumber: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationStatus: {
        type: String,
        enum: ['pendiente', 'verificado', 'fallido'],
        default: 'pendiente'
    },
    verificationError: {
        tipo: String,
        mensaje: String,
        timestamp: Date
    }
});

module.exports = mongoose.model('RegistroLuchito', registroSchema);