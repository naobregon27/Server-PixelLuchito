const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const RegistroMacleyn = require("./models/Registro");
const RegistroLuchito = require("./models/RegistroLuchito");
const RegistroBetone = require("./models/RegistroBetone");
const RegistroBettwo = require("./models/RegistroBettwo");
const RegistroBetthree = require("./models/RegistroBetthree");
const RegistroBetFour = require("./models/RegistroBetFour");
const RegistroBetfive = require("./models/RegistroBetfive");
const Registrocash365 = require("./models/Registrocash365");
const RegistroWoncashcorp = require("./models/RegistroWoncashcorp");
const Registromctitan = require("./models/Registromctitan");
const Registrodubai = require("./models/Registrodubai");
const Registromiami = require("./models/Registromiami");
const RegistroPanteraarg1995 = require("./models/RegistroPanteraarg1995");
const RegistroWonbet = require("./models/RegistroWonbet");

const axios = require('axios');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());                  
app.use(require("cors")());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Asegura que req.body funcione correctamente
app.use(cookieParser());

// Conexión a MongoDB con manejo de eventos
mongoose.connect("mongodb+srv://lauraahora4632025:hXqOPPuQ1INnrtkX@ahora4633.kcvqn5q.mongodb.net/")
  .then(() => {
    console.log('✅ Conexión exitosa a MongoDB Atlas');
  })
  .catch(err => {
    console.error('❌ Error de conexión a MongoDB:', err.message);
  });

// Eventos adicionales de conexión
mongoose.connection.on('connected', () => {
  console.log('🟢 MongoDB conectado');
});

mongoose.connection.on('error', (err) => {
  console.error('🔴 Error en la conexión de MongoDB:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('🟡 MongoDB desconectado');
});

const isValidIP = (ip) => {
  const regex =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
  return regex.test(ip);
};

app.post("/guardar", async (req, res) => {
  try {
    const { id, token, pixel, subdominio, dominio, ip, fbclid, mensaje } =
      req.body;

    const { kommoId } = req.query;

    // 1. Verificación de campos obligatorios
    if (!id || !token || !pixel || !subdominio || !dominio || !ip) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    // 2. Validación de tipos y formatos
    if (!/^\d+$/.test(id)) {
      return res.status(400).json({ error: "ID debe ser numérico" });
    }

    if (!isValidIP(ip)) {
      return res.status(400).json({ error: "IP no es válida" });
    }

    let existente;
    // 3. Evitar duplicados si el ID ya existe
    if (kommoId === "cajaadmi01") {
      existente = await RegistroMacleyn.findOne({ id });
    } else if (kommoId === "luchito4637") {
      existente = await RegistroLuchito.findOne({ id });
    } else if (kommoId === "blackpanther1") {
      existente = await RegistroBetone.findOne({ id });
    } else if (kommoId === "blackpanther2") {
      existente = await RegistroBettwo.findOne({ id });
    } else if (kommoId === "blackpanther3") {
      existente = await RegistroBetthree.findOne({ id });
    } else if (kommoId === "blackpanther4") {
      existente = await RegistroBetFour.findOne({ id });
    } else if (kommoId === "publimac") {
      existente = await RegistroBetfive.findOne({ id });
    } else if (kommoId === "Ganamosnet") {
      existente = await Registrocash365.findOne({ id });
    } else if (kommoId === "woncashcorp") {
      existente = await RegistroWoncashcorp.findOne({ id });
    } else if (kommoId === "mctitan") {
      existente = await Registromctitan.findOne({ id });
    } else if (kommoId === "dubai2025fichgmailcom") {
      existente = await Registrodubai.findOne({ id });
    } else if (kommoId === "miamifull24") {
      existente = await Registromiami.findOne({ id });
    } else if (kommoId === "panteraarg1995") {
      existente = await RegistroPanteraarg1995.findOne({ id });
    } else if (kommoId === "wbpubli4") {
      existente = await RegistroWonbet.findOne({ id });
    }

    if (existente) {
      return res.status(409).json({ error: "Este ID ya fue registrado" });
    }

    let nuevoRegistro;

    if (kommoId === "cajaadmi01") {
      nuevoRegistro = new RegistroMacleyn({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "luchito4637") {
      nuevoRegistro = new RegistroLuchito({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "blackpanther1") {
      nuevoRegistro = new RegistroBetone({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "blackpanther2") {
      nuevoRegistro = new RegistroBettwo({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "blackpanther3") {
      nuevoRegistro = new RegistroBetthree({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "blackpanther4") {
      nuevoRegistro = new RegistroBetFour({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "publimac") {
      nuevoRegistro = new RegistroBetfive({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "woncoinbots2") {
      nuevoRegistro = new Registrocash365({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "woncashcorp") {
      nuevoRegistro = new RegistroWoncashcorp({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "mctitan") {
      nuevoRegistro = new Registromctitan({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "dubai2025fichgmailcom") {
      nuevoRegistro = new Registrodubai({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "miamifull24") {
      nuevoRegistro = new Registromiami({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });

      await nuevoRegistro.save();
    } else if (kommoId === "panteraarg1995") {
      nuevoRegistro = new RegistroPanteraarg1995({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });
      await nuevoRegistro.save();
    } else if (kommoId === "wbpubli4") {
      nuevoRegistro = new RegistroWonbet({
        id,
        token,
        pixel,
        subdominio,
        dominio,
        ip,
        fbclid,
        mensaje,
      });
      await nuevoRegistro.save();
    } else {
      return res.status(400).json({ error: "ID de Kommo no reconocido" });
    }

    res.status(201).json({ mensaje: "Datos guardados con éxito" });
    console.log(`✅ Registro guardado exitosamente en ${kommoId} :`, nuevoRegistro);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error interno al guardar los datos" });
  }
});

app.post("/verificacion", async (req, res) => {
  const body = req.body;
  const { kommoId, token } = req.query;

  // --- LOGS DE DEPURACIÓN INICIANDO LA RUTA ---
  console.log("🐛 DEBUG: kommoId recibido:", kommoId);
  console.log("🐛 DEBUG: token recibido:", token);
  // ------------------------------------------

  console.log(JSON.stringify(body, null, 2), "← este es lo que devuelve el body");
  const leadId = req.body?.leads?.add?.[0]?.id;

  // --- LOG DE DEPURACIÓN PARA leadId ---
  console.log("🐛 DEBUG: leadId extraído del webhook:", leadId);
  // ------------------------------------

  if (kommoId === "mctitan") {
    if (leadId) {
      const mensaje = await buscarMensaje(leadId, kommoId, token);

      if (mensaje) {
        console.log("✅ Mensaje final encontrado:", mensaje);
        // podés usarlo para guardar, verificar, etc.
      } else {
        console.log("❌ No se encontró ningún mensaje en lead ni contacto.");
      }
    }

  }

  // NOTE: La función buscarMensaje está definida aquí, pero solo es llamada en el bloque de mctitan.
  // La lógica para otras cuentas Kommo (como miami) va por el path de obtenerContactoDesdeLead y la lectura de custom_fields_values.
  async function buscarMensaje(leadId, kommoId, token, reintentos = 3) {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    const buscarNotas = async (id, tipoEntidad) => {
      for (let intento = 1; intento <= reintentos; intento++) {
        try {
          const response = await axios.get(
            `https://${kommoId}.kommo.com/api/v4/notes`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                entity_id: id,
                entity_type: tipoEntidad,
              },
            }
          );

          const notas = response.data?._embedded?.notes || [];
          const notaMensaje = notas.find((n) => n.note_type === "message");
          if (notaMensaje) {
            console.log(`📨 Mensaje encontrado en ${tipoEntidad}:`, notaMensaje.params?.text);
            return notaMensaje.params?.text;
          }
        } catch (err) {
          if (err.response?.status !== 404) {
            console.error(`❌ Error consultando notas de ${tipoEntidad}:`, err.response?.data || err.message);
            break;
          } else {
            console.log(`🔄 [${tipoEntidad}] Intento ${intento}/${reintentos}: sin notas aún...`);
          }
        }

        await delay(1500); // espera 1.5 segundos antes de reintentar
      }

      return null;
    };

    // Paso 1: buscar en el lead
    const mensajeDelLead = await buscarNotas(leadId, "leads");
    if (mensajeDelLead) return mensajeDelLead;

    // Paso 2: obtener contacto vinculado
    const contacto = await obtenerContactoDesdeLead(leadId, kommoId, token);
    if (!contacto?.id) {
      console.log("⚠️ No se encontró contacto vinculado.");
      return null;
    }

    // Paso 3: buscar en el contacto
    const mensajeDelContacto = await buscarNotas(contacto.id, "contacts");
    return mensajeDelContacto || null;
  }

  if (!leadId) {
    return res.status(400).json({
      error: "Lead ID no encontrado",
      detalles: {
        tipo: 'lead_no_encontrado',
        mensaje: "No se encontró el ID del lead en la solicitud",
        timestamp: new Date()
      }
    });
  }

  const contacto = await obtenerContactoDesdeLead(leadId, kommoId, token);

  if (contacto) {
    console.log("🧾 ID del contacto:", contacto.id);

    const leadResponse = await axios.get(`https://${kommoId}.kommo.com/api/v4/leads/${leadId}?with=custom_fields_values`, { // Añadido ?with=custom_fields_values
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const lead = leadResponse.data;

    // --- LOG DE DEPURACIÓN PARA el objeto lead completo ---
    console.log("🐛 DEBUG: Objeto lead COMPLETO devuelto por Kommo API:", JSON.stringify(lead, null, 2));
    // ----------------------------------------------------

    const campoMensaje = lead.custom_fields_values?.find(field =>
      field.field_name === "mensajeenviar"
    );
    const mensaje = campoMensaje?.values?.[0]?.value;

    // --- LOGS DE DEPURACIÓN PARA campoMensaje y mensaje ---
    console.log("🐛 DEBUG: Valor de 'campoMensaje' encontrado:", JSON.stringify(campoMensaje, null, 2));
    console.log("🐛 DEBUG: Valor final de 'mensaje' antes de regex:", mensaje);
    // ---------------------------------------------------

    console.log("📝 Mensaje guardado en el lead (mensajeenviar):", mensaje);

    const idExtraido = mensaje?.match(/\d{13,}/)?.[0];
    console.log("🧾 ID extraído del mensaje:", idExtraido); //cambios

    if (idExtraido) {
      let Modelo;

      if (kommoId === "cajaadmi01") {
        Modelo = RegistroMacleyn;
      } else if (kommoId === "luchito4637") {
        Modelo = RegistroLuchito;
      } else if (kommoId === "blackpanther1") {
        Modelo = RegistroBetone;
      } else if (kommoId === "blackpanther2") {
        Modelo = RegistroBettwo;
      } else if (kommoId === "blackpanther3") {
        Modelo = RegistroBetthree;
      } else if (kommoId === "blackpanther4") {
        Modelo = RegistroBetFour;
      } else if (kommoId === "publimac") {
        Modelo = RegistroBetfive;
      } else if (kommoId === "woncoinbots2") {
        Modelo = Registrocash365;
      } else if (kommoId === "woncashcorp") {
        Modelo = RegistroWoncashcorp;
      } else if (kommoId === "mctitan") {
        Modelo = Registromctitan;
      } else if (kommoId === "dubai2025fichgmailcom") {
        Modelo = Registrodubai;
      } else if (kommoId === "miamifull24") { //miami
        Modelo = Registromiami;
      } else if (kommoId === "panteraarg1995") {
        Modelo = RegistroPanteraarg1995;
      } else if (kommoId === "wbpubli4") {
        Modelo = RegistroWonbet;
      }

      try {
        let registro = await Modelo.findOne({ id: idExtraido });

        if (registro) {
          console.log("✅ Registro encontrado:", registro);

          if (registro.isVerified) {
            return console.log("Registro ya pixeleado")
          }

          // Obtener el número de WhatsApp del contacto
          const whatsappNumber = contacto.custom_fields_values?.find(field =>
            field.field_code === "PHONE" || field.field_name?.toLowerCase().includes("whatsapp")
          )?.values?.[0]?.value;

          if (whatsappNumber) {
            registro.whatsappNumber = whatsappNumber;
            console.log("📱 Número de WhatsApp guardado:", whatsappNumber);
          }

          // Intentamos verificar el registro
          try {
            // Generar fbc, fbp y event_id
            const cookies = req.cookies;
            const fbclid = registro.fbclid;

            const fbc = cookies._fbc || (fbclid ? `fb.1.${Math.floor(Date.now() / 1000)}.${fbclid}` : null);
            const fbp = cookies._fbp || `fb.1.${Math.floor(Date.now() / 1000)}.${Math.floor(1000000000 + Math.random() * 9000000000)}`;
            const event_id = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;

            // Marcar como verificado
            registro.isVerified = true;
            registro.verificationStatus = 'verificado';
            await registro.save();

            // URL con el parámetro access_token correctamente
            const pixelEndpointUrl = `https://graph.facebook.com/v18.0/${registro.pixel}/events?access_token=${registro.token}`;

            const eventData = {
              event_name: "Lead",
              event_id,
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: `https://${registro.subdominio}.${registro.dominio}`,
              user_data: {
                client_ip_address: registro.ip,
                client_user_agent: req.headers["user-agent"],
                em: registro.email ? require("crypto").createHash("sha256").update(registro.email).digest("hex") : undefined,
                fbc,
                fbp
              },
            };

            console.log("Datos del evento a enviar:", JSON.stringify(eventData, null, 2));
            console.log("URL del Pixel:", pixelEndpointUrl);

            const pixelResponse = await axios.post(
              pixelEndpointUrl,
              {
                data: [eventData],
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            console.log("📡 Pixel ejecutado con éxito:", pixelResponse.data);
            return res.status(200).json({
              mensaje: "Verificación completada exitosamente",
              estado: "verificado"
            });

          } catch (error) {
            console.error("❌ Error al ejecutar el pixel:", error.response?.data || error.message);

            // Actualizar el registro con el error
            registro.isVerified = false;
            registro.verificationStatus = 'fallido';
            registro.verificationError = {
              tipo: 'pixel_error',
              mensaje: error.response?.data?.error?.message || error.message,
              timestamp: new Date()
            };
            await registro.save();

            if (error.response) {
              console.error("Estado del error:", error.response.status);
              console.error("Encabezados del error:", error.response.headers);
              console.error("Datos del error:", error.response.data);
            } else if (error.request) {
              console.error("No se recibió respuesta del servidor:", error.request);
            } else {
              console.error("Error desconocido:", error.message);
            }

            return res.status(500).json({
              error: "Error al ejecutar el pixel",
              detalles: registro.verificationError
            });
          }
        } else {
          console.log("❌ No se encontró un registro con ese ID");
          return res.status(404).json({
            error: "Registro no encontrado",
            detalles: {
              tipo: 'registro_no_encontrado',
              mensaje: `No se encontró un registro con el ID ${idExtraido}`,
              timestamp: new Date()
            }
          });
        }
      } catch (error) {
        console.error("Error al buscar o actualizar el registro:", error);
        return res.status(500).json({
          error: "Error interno",
          detalles: {
            tipo: 'error_interno',
            mensaje: error.message,
            timestamp: new Date()
          }
        });
      }
    } else {
      console.log("⚠️ No se pudo extraer un ID del mensaje");
      return res.status(400).json({
        error: "ID no encontrado",
        detalles: {
          tipo: 'id_no_encontrado',
          mensaje: "No se pudo extraer un ID válido del mensaje",
          timestamp: new Date()
        }
      });
    }
  }

  return res.status(400).json({
    error: "Contacto no encontrado",
    detalles: {
      tipo: 'contacto_no_encontrado',
      mensaje: "No se pudo obtener la información del contacto",
      timestamp: new Date()
    }
  });
});

async function obtenerContactoDesdeLead(leadId, kommoId, token) {
  // Aseguramos que se solicite custom_fields_values para el contacto si es necesario
  const url = `https://${kommoId}.kommo.com/api/v4/leads/${leadId}?with=contacts`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const lead = response.data;
    const contacto = lead._embedded?.contacts?.[0]; // primer contacto vinculado

    if (!contacto) {
      console.log("⚠️ No se encontró ningún contacto asociado a este lead");
      return null;
    }

    console.log("✅ Contacto vinculado al lead:", contacto);
    return contacto;

  } catch (err) {
    console.error("❌ Error al obtener contacto desde lead:", err.response?.data || err.message);
    return null;
  }
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});