import React, { useEffect } from "react"
import { useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounce, useMount } from "utils"
import * as qs from "qs"
import { useHttp } from "utils/http"
import styled from "@emotion/styled"
// import Test from './test'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name:"",
        personId:"",
    })
    const debouncedParam = useDebounce(param, 200)
    const [list, setList] = useState([])
    const client = useHttp ()

    useEffect(()=>{
        client('projects', {data: cleanObject(debouncedParam)}).then(setList)
    }, [debouncedParam]);

    useMount(() => {
        client('users'). then(setUsers)
    });

    return (
    <Container>
        <h1>Project List</h1>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list} />
        {/* <Test /> */}
    </Container>
    );
};

const Container = styled.div`
    padding: 3.2rem
`