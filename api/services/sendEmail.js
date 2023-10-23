import nodemailer from 'nodemailer';
import ejs from 'ejs';
import fs from 'fs';

// Read and compile the HTML template (using EJS)
const emailTemplate = ejs.compile(fs.readFileSync(`./views/password-reset.ejs`, 'utf8'));

const sendEmail = (email, resetLink) => {
    const gmail = process.env.GMAIL
    const gmail_pass = process.env.GMAIL_PASSWORD
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmail,
            pass: gmail_pass
        }
    })
    const html = emailTemplate({ username: "rithick", link: resetLink })

    const message = {
        from: gmail,
        to: email,
        subject: "Test subject",
        text: "Test text",
        html: html
        // html: `<h1>Test html</h1>
        //       <p>Test paragraph</p>
        //       <a href=${resetLink}>Reset password</a>`
    }

    transporter.sendMail(message, (error) => {
        if (error) {
            console.log("Error", error)
        } else {
            console.log("Email successfully sent to :", email)
        }
    })

    // let username = "rithick"
    console.log(html)
    console.log("Email sent, Success!")
}

export { sendEmail }