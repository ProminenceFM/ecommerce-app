import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title= "Sign Up"/>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create an Account</h3>
              <form className="d-flex flex-column gap-30" action="">
                <div>
                  <input type="text" name="name" placeholder="Full Name" className="form-control" />
                </div>
                <div>
                  <input type="tel" name="tel" placeholder="Contact" className="form-control" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="E-mail" className="form-control" />
                </div>
                <div className="mt-1">
                  <input type="password" name="password" placeholder="Password" className="form-control" />
                </div>
                <div className="mt-3">
                  <div className="d-flex gap-15 justify-content-center align-items-center">
                    <button className="button border-0">Create</button>
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

export default Signup;