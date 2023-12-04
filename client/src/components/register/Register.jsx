import { useContext } from "react";

import AuthContext from "../../context/authContext";
import useForm from "../../hooks/form";

export default function Register () {
  const {registerSubmitHandler} = useContext(AuthContext);
  const { onChange, onSubmit } = useForm(registerSubmitHandler)

    return (
      <form id="register" onSubmit={onSubmit}>
  <div className="container">
    <h1>Register</h1>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" 
onChange={onChange}
/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" id="password" 
    onChange={onChange}
    />

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" 
    onChange={onChange}
    />
    <hr/>

    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
</form>
    );
}