import { useState } from "react"
import classes from './AuthForm.module.css'

export  const AuthForm = () => {
  const [isLogin,setIsLogin] = useState(true)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'SignUp'}</h1>
            <from>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className={classes.actions}>
                    <button>{isLogin ? 'Login' : 'create Account'}</button>
                    <button
                     className={classes.toggle}
                     type="button" 
                     onClick= { switchAuthModeHandler } >
                     { isLogin ? 'Create new Account' : 'Login with existing account'}</button>
                </div>

            </from>
        </section>
    )
}