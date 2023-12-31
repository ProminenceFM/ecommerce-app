import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title= "Login"/>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form className="d-flex flex-column gap-30" action="">
                <div>
                  <input type="email" name="email" placeholder="E-mail" className="form-control" />
                </div>
                <div className="mt-1">
                  <input type="password" name="password" placeholder="Password" className="form-control" />
                </div>
                <div className="mt-3">
                  <Link to="/forgot-password" >Forgot Password</Link>
                  <div className="d-flex gap-15 justify-content-center align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup border-0">SignUp</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login;