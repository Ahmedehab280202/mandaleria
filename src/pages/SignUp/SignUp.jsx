import './signUp.css'
import Navbar from '../../components/Navbar';
import Btn from '../../components/Btn'

const SignUp = () => {
  return (
    <>
      <div class="signup">
        <Navbar />
        <div class="SignUpPage">
            <span class="Title">
                SignUp
            </span>
        </div>
        <div class="UserInfo">
            <div class="UserInputSection">
                <label>
                    Fullname
                </label>
        <div class="InputBar"></div>            
            </div>
            <div class="UserInputSection">
                <label>
                    Email
                </label>  
                <div class="InputBar"></div>
            </div>
            <div class="UserInputSection">
                <label>
                    Phone Number
                </label>
                <div class="InputBar"></div>
            </div>
            <div class="UserInputSection">
                <label>
                    Password
                </label>
                <div class="InputBar"></div>
            </div>
            <div class="UserInputSection">
                <label>
                    Confirm Password
                </label>
                <div class="InputBar"></div>
            </div>
            <Btn text='Sign Up' link='/' />
        </div>
    </div>
    </>
  )
}

export default SignUp;