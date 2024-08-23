/* Creating and Nesting Components */
import React, { useState } from 'react';
import './comp.css'

// How to display data in React:

function LoginSignupForm(){
    const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
};

if(isLogin){
    return(
        <div>
            <h1>Login Form</h1>
            <form action="">
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder='Enter your email' required />
                </div>

                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder='Enter your password' required />
                </div>

                <button type='submit'>Login</button>
                
            </form>

            <p>Don't have an account? <button onClick={toggleForm}>SignUp</button></p>
            {/* Outside the form */}
        </div>
    );
    }

    else{
        return(
            <div>
                <h1>SignUp Form</h1>
            <form action="">
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" placeholder='Enter your email' required />
                </div>

                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder='Enter your password' required />
                </div>

                <div>
                    <label htmlFor="">Confirm Password:</label>
                    <input type="password" placeholder='Confirm your password' required />
                </div>

                <button type='submit'>SignUp</button>
                
            </form>

            <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
            {/* Outside the form */}
            </div>
        );
    }
}

export default LoginSignupForm;