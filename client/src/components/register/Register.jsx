import { useContext } from "react";

import * as AuthContext from "../../context/authContext";
import form from "../../hooks/form";

const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirm-password',
}
export default function Register () {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = form(registerSubmitHandler, {
      [RegisterFormKeys.Email]: '',
      [RegisterFormKeys.Password]: '',
      [RegisterFormKeys.ConfirmPassword]: '',
  });

    return (
      <form id="register" onSubmit={onSubmit}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" />
onChange={onChange}
values={values[RegisterFormKeys.Email]}

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" />
    onChange={onChange}
    values={values[RegisterFormKeys.Password]}

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" />
    onChange={onChange}
    values={values[RegisterFormKeys.ConfirmPassword]}
    <hr/>

    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
</form>
    );
}