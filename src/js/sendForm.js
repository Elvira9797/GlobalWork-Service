import emailjs from 'emailjs-com';

const EMAIL_JS_USER_ID = 'VGEV7y7T5pVhp9lrY';
const EMAIL_JS_SERVICE_ID = 'service_kwhvrxt';
const EMAIL_JS_TEMPLATE_ID = 'template_i8pabwh';

emailjs.init(EMAIL_JS_USER_ID);

const form = document.getElementById('form');

form.addEventListener('submit', sendData);

async function sendData(event) {
  event.preventDefault();

  const newObj = Object.fromEntries(new FormData(event.target));

  const emailData = {
    to_email: 'globalworkservice27@gmail.com',
    subject: 'Work permit',
    from_name: `${newObj.name}`,
    message: `
      Name: ${newObj.name}
      Phone: ${newObj.tel}
      Comment or Review: ${newObj.message}
    `,
  };

  try {
    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, emailData);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
