import styles from './Login.module.scss'
import Logo from '../../assets/Logo.svg?react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

type FormFields = {
    email: string;
    password: string;
}



export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormFields>()

    const onSubmit = (data: FormFields) => {
        console.log(data)
    }

    return (
        <div className={styles.login}>
            <div className={styles.loginCnt}>
                <div><Logo /></div>
                <div className={styles.loginFormCnt}>
                    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", {
                            required: "Email is required",
                            validate: (value) => {
                                if (!value.includes("@")) {
                                    return " Email must include @"
                                }
                                return true;
                            }
                        })}
                            type="text"
                            className={styles.loginInput}
                            placeholder="Email" autoComplete='off'
                        />
                        {errors.email && <div className={styles.errorText}>{errors.email.message}</div>}
                        <input {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                            className={styles.loginInput}
                            type="password"
                            placeholder="Password" autoComplete='off'
                        />
                        {errors.password && <div className={styles.errorText}>{errors.password.message}</div>}
                        <button type='submit' className={styles.strokeButton}>SING UP</button>
                    </form>
                </div>

                <div className={styles.loginTextCnt}>
                    <p className={styles.loginTextPassword}>I don't remember password</p>
                    <Link to="/account" className={styles.loginTextAccount}>Creat a new account</Link>
                </div>
            </div>
        </div>
    )
}