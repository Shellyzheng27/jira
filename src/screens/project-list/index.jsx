import React, { useEffect } from "react"
import { useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounce, useMount } from "utils"
import * as qs from "qs"
// import Test from './test'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name:"",
        personID:"",
    })
    const debouncedParam = useDebounce(param, 500)
    const [list, setList] = useState([])

// console.log("users :", users)
// console.log("param :", param)
// console.log("list :", list)

    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            if(response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list} />
        {/* <Test /> */}
    </div>
}