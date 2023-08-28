import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title= "Forgot Password"/>
      <BreadCrumb title= "Login"/>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center py-2 mb-3">We will send you an e-mail to reset your password</p>
              <form className="d-flex flex-column gap-30" action="">
                <div>
                  <input type="email" name="email" placeholder="E-mail" className="form-control" />
                </div>
                <div>
                  <div className="d-flex gap-15 flex-column mt-3 justify-content-center align-items-center">
                    <button className="button border-0">Submit</button>
                    <Link to="/login" >Cancel</Link>
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

export default ForgotPassword;