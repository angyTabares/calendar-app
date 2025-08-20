import { useEffect } from "react";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import "./LoginPage.css";
import Swal from "sweetalert2";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

const loginFormValidations = {
  loginEmail: [(value) => value.includes("@"), "El correo debe ser válido"],
  loginPassword: [
    (value) => value.trim().length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
};

const registerFormValidations = {
  registerName: [
    (value) => value.trim().length > 0,
    "El nombre es obligatorio",
  ],
  registerEmail: [(value) => value.includes("@"), "El correo debe ser válido"],
  registerPassword: [
    (value) => value.trim().length >= 6,
    "La contraseña debe tener al menos 6 caracteres",
  ],
  registerPassword2: [
    (value) => value.trim().length >= 6,
    "Debe repetir la contraseña",
  ],
};

export const LoginPage = () => {
  const { startLogin, startRegister, errorMessage } = useAuthStore();

  const {
    loginEmail,
    loginPassword,
    onInputChange: onLoginInputChange,
    loginEmailValid,
    loginPasswordValid,
    isFormValid: isLoginFormValid,
    onBlur,
    touched,
    setAllTouched,
  } = useForm(loginFormFields, loginFormValidations);

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onRegisInputChange,
    registerNameValid,
    registerEmailValid,
    registerPasswordValid,
    registerPassword2Valid,
    isFormValid: isRegisterFormValid,
    onBlur: onBlurRegister,
    touched: touchedRegister,
    setAllTouched: setAllTouchedRegister,
  } = useForm(registerFormFields, registerFormValidations);

  const loginSubmit = (event) => {
    event.preventDefault();
    setAllTouched();
    if (!isLoginFormValid) {
      return;
    }
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    setAllTouchedRegister();
    if (!isRegisterFormValid) {
      return;
    }
    if (registerPassword !== registerPassword2) {
      Swal.fire("Error en registro", "Contraseñas no son iguales", "error");
      return;
    }
    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
      registerPassword2,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Inicio de Sesión</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
                onBlur={onBlur}
              />
              {touched.loginEmail && loginEmailValid && (
                <span className="text-danger">{loginEmailValid}</span>
              )}
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginPassword}
                onChange={onLoginInputChange}
                onBlur={onBlur}
              />
              {touched.loginPassword && loginPasswordValid && (
                <span className="text-danger">{loginPasswordValid}</span>
              )}
            </div>
            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerName}
                onChange={onRegisInputChange}
                onBlur={onBlurRegister}
              />
              {touchedRegister.registerName && registerNameValid && (
                <span className="text-light">{registerNameValid}</span>
              )}
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisInputChange}
                onBlur={onBlurRegister}
              />
              {touchedRegister.registerEmail && registerEmailValid && (
                <span className="text-light">{registerEmailValid}</span>
              )}
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerPassword}
                onChange={onRegisInputChange}
                onBlur={onBlurRegister}
              />
              {touchedRegister.registerPassword && registerPasswordValid && (
                <span className="text-light">{registerPasswordValid}</span>
              )}
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerPassword2}
                onChange={onRegisInputChange}
                onBlur={onBlurRegister}
              />
              {touchedRegister.registerPassword2 && registerPassword2Valid && (
                <span className="text-light">{registerPassword2Valid}</span>
              )}
            </div>

            <div className="d-grid gap-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
