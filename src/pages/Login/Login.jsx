import './login.css'
import Navbar from '../../components/Navbar';
import Btn from '../../components/Btn';

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
      <Btn text='Log In' link='/' />
    </div>
    </>
  )
}

export default Login;