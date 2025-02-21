import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        // Get the form data sent in the request
        const { name, email, message } = await req.json();

        // Create a transporter using Gmail's SMTP server
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail email address
                pass: process.env.GMAIL_PASSWORD, // Your Gmail App Password
            },
        });

        // Set up email data
        const mailOptions = {
            from: process.env.GMAIL_USER, // Sender's email address
            to: process.env.GMAIL_USER, // Receiver's email address (you can change this to any recipient email)
            subject: `New contact message from ${name}`, // Subject line
            text: `You have received a new message from:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br />${message}</p>`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Return success message
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
        });
    } catch (error) {
        // Return error message if email fails to send
        return new Response(
            JSON.stringify({ error: 'Failed to send email', details: error.message }),
            { status: 500 }
        );
    }
}
