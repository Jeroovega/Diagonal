const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const port = 3001;

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

// Configurar tu clave API de SendGrid

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('*password*');

const msg = {
  to: 'agustin@diagonal-bookings.com',
  from: '',
  subject: 'Reserva de Artista',
  text: `[ENGLISH BELOW]
  Hola,
  Gracias por tu interés! Si te gustaría bookear a [NOMBRE DE ARTISTA], por favor envíanos la siguiente información:
  
  ➔ Fecha del evento: 
  ➔ Nombre del evento: 
  ➔ Lugar: 
  ➔ Capacidad: 
  ➔ Cantidad de escenarios/pistas: 
  ➔ Capacidad del escenario en el que actuará el/la artista: 
  ➔ Capacidad de otras salas/escenarios: 
  ➔ Horario de apertura y cierre del evento: 
  ➔ Precio de las entradas: 
  ➔ Lineup: 
  ➔ Set time: 
  ➔ Oferta económica: 
  ➔ ¿Aplican impuestos? ¿En qué porcentaje y cuáles?: 
  ➔ Bookings recientes: 
  ➔ Página web: 
  
  Para la facturación y armado del contrato, también necesitamos saber:
  
  ➔ Nombre de la organización: 
  ➔ Calle de la org.: 
  ➔ N° de Calle de la org.: 
  ➔ Código postal: 
  ➔ Ciudad: 
  ➔ País: 
  ➔ Identificación fiscal: 
  ➔ Nombre y apellidos de la persona de contacto: 
  ➔ Teléfono: 
  ➔ Email: 
  
  Hi,
  Thanks for showing interest! If you’d like to book [NOMBRE DE ARTISTA], please send us the following info.:
  
  ➔ Date of the event: 
  ➔ Event name: 
  ➔ Venue: 
  ➔ Capacity: 
  ➔ Number of stages: 
  ➔ Capacity of stage artist will perform: 
  ➔ Capacity of other rooms/stages: 
  ➔ Event open & closing hours: 
  ➔ Ticket price: 
  ➔ Lineup: 
  ➔ Set time: 
  ➔ Offer: 
  ➔ Does withholding tax apply, if yes what %: 
  ➔ Recent bookings: 
  ➔ Website: 
  
  For invoicing and contracting, we also need to know:
   
  ➔ Name of Organization: 
  ➔ Street: 
  ➔ Street N°:
  ➔ Zip code: 
  ➔ City: 
  ➔ Country: 
  ➔ VAT ID: 
  ➔ Contact First & Last Names: 
  ➔ Phone Number: 
  ➔ Email:    
  `,
  html: '<p>Cuerpo del correo en formato HTML</p>',
};

sgMail.send(msg);

app.post('/send-email', async (req, res) => {
    const { email, subject, body } = req.body;
  
    const msg = {
      to: email,
      from: '',
      subject: subject,
      text: body,
      html: body,
    };
  
    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error al enviar el correo electrónico desde el servidor:', error);
      res.status(500).json({ success: false, error: 'Error al enviar el correo electrónico', details: error.message });
    }
  });
  

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
