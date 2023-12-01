import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/form";

export default function Login  () {
  const {loginSubmitHandler}  = useContext(AuthContext);
  const { onChange, onSubmit } = useForm(loginSubmitHandler)

    return (
      <form id="login" onSubmit={onSubmit}>
      <div className="container">
        <label htmlFor="email" ><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email"
        onChange={onChange} 
        />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password"
        onChange={onChange}
        />
    
        <button type="submit">Login</button>
       
      </div>
    
     
    </form>
    );
}