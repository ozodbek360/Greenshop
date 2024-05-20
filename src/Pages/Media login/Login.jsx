import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='Login'>
        <div className="image">
            <img src="./Images/medialogo.png" alt="" />
        </div>
          <div className="inputs">
                <p className="username">
                  Enter your username and password to login.
                </p>
                <input type="text" placeholder="almamun_uxui@outlook.com" />
                <input type="password" placeholder="password" />
                <p>Forgot Password?</p>
              </div>
              <div className="log_btn">
                <button>Login</button>
              </div>
              <div className="orlogin">
                <span className="bolt"></span>
                <h3>Or login with</h3>
                <span className="bolt"></span>
              </div>
              <div className="btns">
                <div className="btn1">
                  <button>
                    <img src="./Images/btn1.png" alt="" />
                    <p>Login with Google</p>
                  </button>
                </div>
                <div className="btn2">
                  <button>
                    <img src="./Images/btn2.png" alt="" />
                    <p>Login with Facebook</p>
                  </button>
                </div>
              </div> 
              <div className="end_text">
                <p>Don't have an account? <Link to={"/register"}><span>Sign Up</span></Link></p>
              </div>
    </div>
  )
}

export default Login