import { useContext,useCallback,useState } from "react";

import AuthContext from "../../context/authContext";
import useForm from "../../hooks/form";

export default function Register () {
  const {registerSubmitHandler} = useContext(AuthContext);
  const { values,onChange, onSubmit } = useForm(registerSubmitHandler)
  

  const [errors, setErrors] = useState({
    requiredEmail: false,
    testEmail: false,
    requiredPassword: false,
    requiredRepeatPassword: false,
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

const onRepeatPasswordBlur = useCallback(() => {
    if (values.repeatPassword === "") {
        setErrors(state => ({...state, requiredRepeatPassword: true}));
    } else {
        setErrors(state => ({...state, requiredRepeatPassword: false}));
    }
}, [values]);


    return (
      <form id="register" onSubmit={onSubmit}>
  <div className="container">
    <h1>Register</h1>

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" 
onChange={onChange}
value={values.email}
onBlur={onEmailBlur} 
/>
{errors.requiredEmail && <span style={{color: "red"}}>This field is required</span>}
  {errors.testEmail && <span style={{color: "red"}}>Enter valid email</span>}

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" id="password" 
    onChange={onChange}
    value={values.password}
onBlur={onPasswordBlur} 
    />
    {errors.requiredPassword && <span style={{color: "red"}}>This field is required</span>}

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="repeatPassword" id="repeatPassword" 
    onChange={onChange}
    value={values.repeatPassword}
onBlur={onRepeatPasswordBlur} 
    />
   {errors.requiredRepeatPassword && <span style={{color: "red"}}>This field is required</span>} 

    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/login">Sign in</a>.</p>
  </div>
</form>
    );
}