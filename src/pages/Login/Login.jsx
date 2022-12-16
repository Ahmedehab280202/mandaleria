import './login.css'
import Navbar from '../../components/Navbar';

const Login = () => {
  return (
    <>
      <div class="Login">
      <Navbar />
      <div class="LoginText"><span class="Title">
        Login
      </span></div>
      <div class="UserInputSection">
        <div class="Email-addres-frame">
          <label>
              Email Address
            </label>
            <input class="InputBar"></input>
        </div>
    </div>
    <div class="UserInputSection">
      <div class="Frame-86">
        <label>
        Password
          </label>
          <input class="InputBar"></input>
      </div>
    </div>
      <div class="SubmitSection">
        {/* <div class="ForgotPass">
          <span class="Forget-Password-">
            Forgot Password ?
          </span>
        </div> */}
          <span class="Register">
            <a href="/signup">Register</a>
          </span>
      </div>
      <div class="Btn"><span class="Text">
        Log In
      </span></div>
    </div>
    </>
  )
}

export default Login;