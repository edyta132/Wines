import styles from './Login.module.scss'
import Logo from '../../assets/Logo.svg?react'
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../core/services/firebase'
import { useNavigate } from "react-router-dom";


type FormFields = {
    name: string,
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
    const navigate = useNavigate();


    const onSubmit = (data: FormFields) => {
        console.log(data)
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                // Signed up 
                // const user = userCredential.user;
                if (auth.currentUser) {
                    updateProfile(auth.currentUser, {
                        displayName: data.name
                    })

                }
                navigate('/')

            })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // });

    }


    return (
        <div className={styles.login}>
            <div className={styles.loginCnt}>
                <div><Logo /></div>
                <p className={styles.accountTextAccount}>Creat a new account</p>
                <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", {
                        required: "This field can't be empty",
                    })}
                        className={styles.loginInput}
                        type="text"
                        placeholder="Name">
                    </input>
                    {errors.name && <div className={styles.errorText}>{errors.name.message}</div>}
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