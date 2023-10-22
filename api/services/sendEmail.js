import nodemailer from 'nodemailer';

const sendEmail = (email) => {
    const gmail = process.env.GMAIL
    const gmail_pass = process.env.GMAIL_PASSWORD

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmail,
            pass: gmail_pass
        }
    })

    const message = {
        from: gmail,
        to: email,
        subject: "Test subject",
        text: "Test text",
        html: `<h1>Test html</h1>
              <p>Test paragraph</p>`
    }

    transporter.sendMail(message, (error) => {
        if (error) {
            console.log("Error", error)
        } else {
            console.log("Email successfully sent to :", email)
        }
    })

    console.log("Email sent, Success!")
}

export { sendEmail }