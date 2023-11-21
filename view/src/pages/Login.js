import React from "react";

function Login() {
  return (
    <div className="modal fade" tabIndex="-1" role="dialog" id="modalLogin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Log-in</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-success" type="submit">Log-in</button>
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;