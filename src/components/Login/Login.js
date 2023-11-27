import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';

const Login = ({ isAuthenticated, loginSuccess, loginFailure }) => {

  const handleLogin = () => {
    alert("Estoy logeando");
    //GOLPEAR API
    const apiResponse = { status: 200 };

    if (apiResponse.status === 200) {
      loginSuccess();
    } else {
      loginFailure();
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>{isAuthenticated ? '¡Inicio de sesión exitoso!' : 'Inicio de sesión fallido'}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { loginSuccess, loginFailure })(Login);