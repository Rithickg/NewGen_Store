import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';


const sendEmail = (email, subject, template, data) => {
    console.log("Data", data)
    const gmail = process.env.GMAIL
    const gmail_pass = process.env.GMAIL_PASSWORD
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmail,
            pass: gmail_pass
        }
    })

    const emailTemplate = ejs.compile(fs.readFileSync(`./templates/${template}`, 'utf8'));
    const htmlContent = emailTemplate(data)

    const message = {
        from: gmail,
        to: email,
        subject: subject,
        text: subject,
        html: htmlContent
    }

    transporter.sendMail(message, (error) => {
        if (error) {
            console.log("Error", error)
        } else {
            console.log("Email successfully sent to :", email)
        }
    })
}

export { sendEmail }