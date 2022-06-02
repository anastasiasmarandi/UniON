const be = "http://127.0.0.1:5000";

export const loginUser = async (mail, passw) => {
  const url = `${be}/login`;
  const body = {
    email: mail,
    password: passw,
  };

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: body,
  });

  return response;
};

export const registerUser = async (firstName, lastName, cnp, mail, passw) => {
  const url = `${be}/register`;
  const body = {
    firstName: firstName,
    lastName: lastName,
    cnp: cnp,
    email: mail,
    password: passw,
  };

  const response = await fetch(url, {
    method: "POST",
    mode: "no-cors",
    body: body,
  });

  return response;
};
