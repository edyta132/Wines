import styles from './Login.module.scss'
import Logo from '../../assets/Logo.svg?react'
import { useForm } from 'react-hook-form'


type FormFields = {
    fullName: string,
    email: string,
    password: string,
    repeatPassword: string
}

export const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormFields>()

    const onSubmit = (data: FormFields) => {
        console.log(data)
    }


    return (
        <div className={styles.login}>
            <div className={styles.loginCnt}>
                <div><Logo /></div>
                <p className={styles.accountTextAccount}>Creat a new account</p>
                <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("fullName", {
                        required: "This field can't be empty",
                    })}
                        className={styles.loginInput}
                        type="text"
                        placeholder="Full name">
                    </input>
                    {errors.fullName && <div className={styles.errorText}>{errors.fullName.message}</div>}
                    <input {...register("email", {
                        required: "This field can't be empty",
                        validate: (value) => {
                            if (!value.includes("@")) {
                                return " Email must include @"
                            }
                            return true;
                        }
                    })}
                        className={styles.loginInput}
                        type="email"
                        placeholder="E-mail address">

                    </input>
                    {errors.email && <div className={styles.errorText}>{errors.email.message}</div>}
                    <input {...register("password", {
                        required: "This field can't be empty",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })}
                        className={styles.loginInput}
                        type="password"
                        placeholder="Password" />
                    {errors.password && <div className={styles.errorText}>{errors.password.message}</div>}
                    <input {...register("repeatPassword", {
                        required: "This field can't be empty",
                        validate: (value) => {
                            if (value !== watch("password")) {
                                return "The passwords don't match"
                            }
                            // return true
                        }

                    })}
                        className={styles.loginInput}
                        type="password"
                        placeholder="Repeat password" />
                    {errors.repeatPassword && <div className={styles.errorText}>{errors.repeatPassword.message}</div>}

                    <button type='submit' className={styles.strokeButton}>CREATE</button>
                </form>
            </div>
        </div >
    )
}