import React from 'react'
import "./Register.scss"
const Register = () => {
  return (
    <div className='Register'>
        <div className="image">
            <img src="./Images/medialogo.png" alt="" />
        </div>
          <div className="inputs">
                <p className="username">
                  Enter your username and password to login.
                </p>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Enter your email address" />

                <input type="password" placeholder="password" />
                <input type="text" placeholder="Confirm Password" />

                <p>Forgot Password?</p>
              </div>
              <div className="log_btn">
                <button>Login</button>
              </div>
              <div className="orlogin">
                <span className="bolt"></span>
                <h3>Or register with</h3>
                <span className="bolt"></span>
              </div>
              <div className="btns">
                <div className="btn1">
                  <button>
                    <img src="public/Images/btn1.png" alt="" />
                    <p>Login with Google</p>
                  </button>
                </div>
                <div className="btn2">
                  <button>
                    <img src="public/Images/btn2.png" alt="" />
                    <p>Login with Facebook</p>
                  </button>
                </div>
              </div>
    </div>
  )
}

export default Register