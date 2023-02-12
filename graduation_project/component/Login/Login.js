import React, { Fragment } from 'react'
import Nav from '../Home/Nav';
import classes from './Login.module.css'

export const Login = () => {
    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>
            <Nav/>

                            <section className={classes.auth}>
                                <h1>{'تسجيل الدخول '}</h1>
                                <form >
                                    <div className={classes.control}>
                                        <label htmlFor='email'>البريد الالكتروني</label>
                                        <input type='email' id='email' required />
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='password'>كلمة السر</label>
                                        <input
                                            type='password' 
                                            id='password'
                                            required        
                                        />
                                    </div>
                                    
                                    <div className={classes.actions}>
                                        { (
                                            <button>{'تسجيل الدخول'}</button>
                                        )}
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                        >
                                            {'انشاء حساب'}
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
        </Fragment>

    );
}
