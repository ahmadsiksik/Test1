import Link from 'next/link';
import React, { Fragment } from 'react'
import Nav from '../Home/Nav';
import classes from './Regester.module.css'

export const Regester = () => {
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
                                        <label htmlFor='email'>الاسم الاول</label>
                                        <input type='email' id='email' required />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='email'>اسم العائلة</label>
                                        <input type='email' id='email' required />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='number'>رقم الهوية</label>
                                        <input type='number' id='number' required />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='email'>البريد الالكتروني</label>
                                        <input type='email' id='email' required />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor="email">الرقم الشخصي</label>
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
                                    <div className={classes.control}>
                                        <label htmlFor='password'> تاكيد كلمة السر </label>
                                        <input
                                            type='password'
                                            id='password'
                                            required        
                                        />
                                    </div>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label for="vehicle1"> اوافق على<Link href={'/'}> الشروط </Link>  </label><br/>
                                    
                                    <div className={classes.actions}>
                                        { (
                                            <button>{"انشاء الحساب"}</button>
                                        )}
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                        >
                                            {'املك حساب بالفعل'}
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
