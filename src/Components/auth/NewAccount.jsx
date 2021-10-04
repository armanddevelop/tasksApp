import { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  const [loginInfo, setLoginInfo] = useState({
    nameUser: "",
    email: "",
    pass: "",
    confirmPass: "",
  });
  const { email, pass, nameUser, confirmPass } = loginInfo;
  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              id="name"
              name="nameUser"
              placeholder="Ingresa tu nombre"
              value={nameUser}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Ingresa Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="pass"
              value={pass}
              placeholder="Ingresa tu Password"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="retype-password">Retype Password</label>
            <input
              type="password"
              id="retypePassword"
              name="confirmPass"
              value={confirmPass}
              placeholder="Confirma Password"
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          LogIn
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
