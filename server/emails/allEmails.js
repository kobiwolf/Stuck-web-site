const sgMail = require('@sendgrid/mail');

const myMail = 'kobiwolf95@gmail.com';

sgMail.setApiKey(process.env.SENDGRID);

const path =
  process.env.NODE_ENV === 'production'
    ? 'https://stuck-by-kobi-wolf.herokuapp.com'
    : 'http://localhost:3000';
module.exports = path;

const resetPasswordMail = (mail, token, name) => {
  sgMail.send({
    from: myMail,
    to: mail,
    subject: 'reset password link',
    text: `${path}/confirmPassword/${mail}/${token}`,
  });
};
module.exports = { resetPasswordMail };
