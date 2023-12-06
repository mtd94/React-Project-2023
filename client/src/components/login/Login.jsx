import { useContext,useCallback,useState } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/form";
import './Login.css'

export default function Login  () {
  const {loginSubmitHandler}  = useContext(AuthContext);
  const { values,onChange, onSubmit } = useForm(loginSubmitHandler)

  const [errors, setErrors] = useState({
    requiredEmail: false,
    testEmail: false,
    requiredPassword: false,
});

const onEmailBlur = useCallback(() => {
    const rgx = /^(.+)@(.+)$/;

    if (values.email === "") {
        setErrors(state => ({...state, requiredEmail:true, testEmail: false}));
    } else  if (!rgx.test(values.email)) {
        setErrors(state => ({...state, requiredEmail:false, testEmail: true}));
    } else {
        setErrors(state => ({...state, requiredEmail: false, testEmail: false}));
    };
}, [values]);

const onPasswordBlur = useCallback(() => {
    if (values.password === "") {
        setErrors(state => ({...state, requiredPassword: true}));
    } else {
        setErrors(state => ({...state, requiredPassword: false}));
    }
}, [values]);

    return (
      <form id="login" onSubmit={onSubmit}>
      <div className="container">
        <label htmlFor="email" ><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email"
        onChange={onChange} 
        onBlur={onEmailBlur}
        />
         {errors.requiredEmail && <span style={{color: "red"}}>This field is required</span>}
        {errors.testEmail && <span style={{color: "red"}}>Enter valid email</span>}
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password"
        onChange={onChange}
        onBlur={onPasswordBlur}
        />
        {errors.requiredPassword && <span style={{color: "red"}}>This field is required</span>}

    
        <button type="submit">Login</button>
       
      </div>
    
     
    </form>
    );
}