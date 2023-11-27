import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import Header from '../Header/Header';
import Datos from '../../actions/datos';
import Transctions from '../../actions/transctions';
import './Dashboard.css';

const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {

  return (
    <div class="container">
      <Header />
      <main class="trans">
        <Datos />
        <Transctions />
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps, { loginSuccess, loginFailure })(Dashboard);