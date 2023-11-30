import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/form";

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

export default function Login  () {
  const {loginSubmitHandler}  = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
      [LoginFormKyes.Email]: '',
      [LoginFormKyes.Password]: '',
  });

    return (
      <form id="login" onSubmit={onSubmit}>
      <div className="container">
        <label htmlFor="email" ><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name={LoginFormKyes.Email}
        onChange={onChange} 
        // value={values[LoginFormKyes.Email]}
        />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name={LoginFormKyes.Password}
        onChange={onChange}
        // value={values[LoginFormKyes.Password]}
        />
    
        <button type="submit">Login</button>
       
      </div>
    
     
    </form>
    );
}