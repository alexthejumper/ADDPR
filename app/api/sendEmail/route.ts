import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
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

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
        });
    } catch (error: unknown) {
        // Handle the error safely by checking its type
        let errorMessage = 'Failed to send email';
        let errorDetails = '';

        if (error instanceof Error) {
            errorMessage = error.message;
            errorDetails = error.stack || 'No stack trace available';
        } else {
            errorDetails = 'Unknown error';
        }

        return new Response(
            JSON.stringify({ error: errorMessage, details: errorDetails }),
            { status: 500 }
        );
    }
}
