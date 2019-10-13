const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {

  const invalidEmail = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if(invalidEmail.length) {
    return `These emails are invalid: ${invalidEmail}`;
  }

  return;
};