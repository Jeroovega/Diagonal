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
sgMail.setApiKey('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');

const msg = {
  to: 'destinatario@example.com',
  from: 'tucorreo@gmail.com',
  subject: 'Asunto del correo',
  text: 'Cuerpo del correo en texto plano',
  html: '<p>Cuerpo del correo en formato HTML</p>',
};

sgMail.send(msg);


app.post('/send-email', async (req, res) => {
    const { email, subject, body } = req.body;
  
    const msg = {
      to: email,
      from: 'tu-correo@dominio.com',
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
