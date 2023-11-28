import { useContext } from "react";

import AuthContext from "../../context/authContext";
import form from "../../hooks/form";

const Register = () => {
    return (
        <form action="action_page.php">
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>

    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
</form>
    );
}
export default Register;