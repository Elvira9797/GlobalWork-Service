import emailjs from 'emailjs-com';
import * as yup from 'yup';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const EMAIL_JS_USER_ID = 'VGEV7y7T5pVhp9lrY';
const EMAIL_JS_SERVICE_ID = 'service_kwhvrxt';
const EMAIL_JS_TEMPLATE_ID = 'template_i8pabwh';

emailjs.init(EMAIL_JS_USER_ID);

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 4 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address')
    .matches(/@/, 'Email must contain the "@" symbol'),
  tel: yup
    .string()
    .required('Phone is required')
    .matches(/^\d+$/, 'Phone must contain only digits'),
  message: yup.string(),
});

const form = document.getElementById('form');
const userPolicy = document.getElementById('user-policy');
const formBtn = document.getElementById('main-form-btn');
formBtn.disabled = true;

userPolicy.addEventListener('change', function () {
  formBtn.disabled = !userPolicy.checked;
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    tel: formData.get('tel'),
    message: formData.get('message'),
  };

  try {
    await schema.validate(data, { abortEarly: false });

    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('tel-error').textContent = '';

    const emailData = {
      to_email: 'globalworkservice27@gmail.com',
      subject: 'From form',
      from_name: data.name,
      message: `
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.tel}
        Comment or Review: ${data.message}
      `,
    };

    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, emailData);

    Toastify({
      text: 'Your credentials has been sent successfully',
      duration: 3000,
      backgroundColor: '#3adc24',
      color: 'white',
    }).showToast();

    form.reset();
  } catch (error) {
    error.inner.forEach(err => {
      const fieldId = `${err.path}-error`;
      const errorMessage = document.getElementById(fieldId);
      errorMessage.textContent = err.message;
    });
  }
});
