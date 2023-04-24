import { useAuth } from "context/auth-context"
import React from "react"
import { ProjectListScreen } from "screens/project-list"

export const AutheticatedApp = () => {
    const {logout} = useAuth()
    return <div>
        <button onClick={logout}>Log out</button>
        <ProjectListScreen/>
    </div>
}