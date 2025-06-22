# 📧 Node.js Email Sending using Nodemailer

This project demonstrates how to send emails using **Node.js**, **Express**, and **Nodemailer**. It uses **Ethereal Email** for testing, but can be configured to use real SMTP services like Gmail, Mailtrap, or Mailgun.

---

## 🔧 Setup Instructions

### 1. Initialize NPM

    ```bash
    npm init -y

### 2. Install Dependencies

    ```bash
    npm install express nodemailer nodemon

# 📨 Email Sending Setup

### 3. Create a Test Email Account

    Go to Ethereal Email and create a free test email account. Ethereal is great for development and testing because it simulates real email sending without actually delivering to a recipient.

    You will receive SMTP credentials like:

    Host: smtp.ethereal.email
    Port: 587
    Username and Password

### 4. Use Nodemailer
    Get starter code or examples directly from the official documentation:

    🔗 https://nodemailer.com/about/

    Use those credentials to set up the transporter in your controller like this:

        const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
        });

    ⚠️ Never hardcode credentials. Use environment variables stored in a .env file.

🛠️ Example .env File

    EMAIL_USER=your-ethereal-username
    EMAIL_PASS=your-ethereal-password
    PORT=3000

    Don’t forget to add .env to your .gitignore.

🚀 Running the App

    ## Start the server with Node:

    npm start

    ## Visit the following route in your browser to trigger the email:

    http://localhost:3000/

📌 Notes

    Ethereal Email is only for testing purposes — it does not deliver real emails.
    
    For production, use SMTP credentials from:

        Gmail (with OAuth or App Passwords)
        Mailtrap (sandbox testing)
        Mailgun
        SendGrid
        Zoho, Outlook, etc.
    
🗂️ Project Structure

    project-folder/
    ├── index.js
    ├── .env
    └── app/
        └── controller/
            └── emailSendController.js

