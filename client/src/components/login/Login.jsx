const Login = () => {
    return (
      <form action="action_page.php">
    
      <div className="container">
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" />
    
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" />
    
        <button type="submit">Login</button>
       
      </div>
    
     
    </form>
    );
}
export default Login;