import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL

export const RegisterScreen = () => {

    const {register, user} = useAuth()

    //HTMLFormElement extends Element
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        register({username, password})
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id={'username'}/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id={"password"}></input>
        </div>
        <button type={"submit"}>Sign up</button>
    </form>
}