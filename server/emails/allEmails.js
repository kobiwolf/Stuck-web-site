const sgMail = require('@sendgrid/mail');

const myMail = 'kobiwolf95@gmail.com';

sgMail.setApiKey(process.env.SENDGRID);

const resetPasswordMail = (mail, token, name) => {
  sgMail.send({
    from: myMail,
    to: mail,
    subject: 'reset password link',
    text: `${endPoint}/${mail}/resetPassword/${token}`,
  });
};
module.exports = { resetPasswordMail };
