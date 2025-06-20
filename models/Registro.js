const mongoose = require('mongoose');

const registroLuchitoSchema = new mongoose.Schema({
    id: String,
    token: String,
    pixel: String,
    subdominio: String,
    dominio: String,
    ip: String,
    fbClid: String,
    mensaje: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RegistroLuchito', registroLuchitoSchema);