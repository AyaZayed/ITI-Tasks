# Lab 3: Payment Gateway Integration & Email Services

## Overview
This lab focuses on implementing a complete payment system with email notifications using NestJS, integrating with Kashier payment gateway (or any other payment gateway) and setting up automated email services.

## 🏗️ Project Structure
Your application should have the following modules:
- **Payment Links Module**: Handle payment link creation and management
- **Mail Module**: Send transactional emails for payment events
- **Authentication**: Secure payment operations with proper authentication

---

## 📋 Requirements

### 1. Payment Gateway Integration

#### Payment Links Module
- [ ] **Implement Payment Links Module**
  - Create a dedicated module for managing payment links
  - Design schema/model for storing payment link data
  - Include fields: amount, currency, description, status, gateway reference, etc.

- [ ] **Create Payment Link Endpoint**
  - Build a POST endpoint to create new payment links
  - Integrate with a Payment Gateway API to generate hosted payment pages
  - Store gateway response data (payment ID, checkout URL, etc.)
  - Return payment link details to the client

- [ ] **Webhook Endpoint**
  - Implement a webhook endpoint to receive payment status updates
  - Handle payment success, failure, and pending notifications
  - Update payment link status in the database
  - Use ngrok to expose local webhook endpoint for testing

- [ ] **Authentication & Authorization**
  - Secure payment link creation endpoint (require authentication)
  - Secure payment links listing endpoint (require authentication)
  - Implement proper role-based access control if needed

- [ ] **Environment Configuration**
  - Store Payment Gateway API keys and secrets in environment variables
  - Never commit sensitive data to version control
  - Use proper environment variable naming conventions

### 2. Email Service Implementation

#### Mail Module Setup
- [ ] **Install Required Dependencies**
  ```bash
  npm install @nestjs-modules/mailer nodemailer
  npm install --save-dev @types/nodemailer
  ```

- [ ] **Configure Mail Module**
  - Set up NestJS mailer module with proper configuration
  - Configure SMTP settings for email delivery
  - Create reusable email templates

- [ ] **General Email Service**
  - Build a generic email sending service
  - Support HTML and plain text email formats
  - Include error handling and logging

- [ ] **Payment Email Templates**
  - **Payment Creation Email**: Notify users when payment link is created
  - **Payment Confirmation Email**: Send receipt when payment is successful
  - **Payment Failure Email**: Notify users of failed payment attempts

- [ ] **SMTP Configuration**
  - Use Gmail SMTP or another free email service
  - Store SMTP credentials in environment variables
  - Test email delivery functionality

---

## 🔧 Implementation Guidelines

### Environment Variables
Create a `.env` file with the following variables:
```env
# Payment Gateway
KASHIER_API_KEY=your_kashier_api_key
KASHIER_SECRET_KEY=your_kashier_secret_key

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@yourapp.com

# Application
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Testing Setup
1. **Local Development**: Use ngrok to expose your local server
2. **Webhook Testing**: Configure Payment Gateway webhooks to point to your ngrok URL
3. **Email Testing**: Test email delivery with your configured SMTP service

---

## 📚 Useful Resources

### Documentation & Tools
- **ngrok**: [https://ngrok.com/](https://ngrok.com/) - Expose local servers to the internet
- **Kashier Documentation**: [https://developers.kashier.io/getting-started/introduction](https://developers.kashier.io/getting-started/introduction)
- **NestJS Mailer**: [https://nest-modules.github.io/mailer/docs/mailer.html](https://nest-modules.github.io/mailer/docs/mailer.html)

### Additional Resources
- **Nodemailer Documentation**: [https://nodemailer.com/](https://nodemailer.com/)
- **Gmail SMTP Setup**: [https://support.google.com/accounts/answer/185833](https://support.google.com/accounts/answer/185833)

---

## ✅ Deliverables

By the end of this lab, you should have:
1. A fully functional payment links module with a Payment Gateway integration
2. A working email service with payment-related email templates
3. Secure API endpoints with proper authentication
4. Environment-based configuration for all sensitive data
5. Webhook handling for real-time payment status updates

## 🎯 Success Criteria
- [ ] Payment links can be created and processed through a Payment Gateway
- [ ] Webhooks successfully update payment status in the database
- [ ] Email notifications are sent for payment events
- [ ] All sensitive data is properly secured in environment variables
- [ ] Authentication is implemented for protected endpoints