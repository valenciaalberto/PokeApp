export default function AttempLogin(form) {
  if (form == null) return Promise.reject("La forma no puede ser nula");

  if (form.email == "" || form.password == "") {
    return Promise.reject("Los campos no pueden estár vacíos");
  }

  const defaultCredentails = {
    email: "test@example.com",
    password: "123456",
  };

  if (JSON.stringify(defaultCredentails) === JSON.stringify(form))
    return Promise.resolve("Logged in!");

  return Promise.reject("Lo sentimos, correo o contraseña son incorrectos");
}
