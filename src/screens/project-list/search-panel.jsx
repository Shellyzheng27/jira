import React from "react"
import { useEffect, useState } from "react"

export const SearchPanel = ({users, param, setParam}) => {

    return <form>
        <div>
            {/* setParam(Object.assign({}, param, {name:evt.target.value})) */}
        <input type="text" value={param.name} onChange={evt => setParam({
            ...param,
            name: evt.target.value
        })} />
        <select value={param.personID} onChange={evt => setParam ({
            ...param,
            personID:evt.target.value
        })}>
            <option value={''}>Person in charge</option>
            {
                users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
            }
        </select>
        </div>
    </form>
}