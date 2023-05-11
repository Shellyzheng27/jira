import React from "react";
import { useEffect, useState } from "react";
import { Select, Input, Form } from "antd";

export interface User{
    id: string;
    name: string;
    email: string;
    title: string;
    organization: string;
    token: string
}
interface SearchPanelProps {
    users: User[],
    param: {
        name: string;
        personId: string;
    },
    setParam: (param: SearchPanelProps['param']) => void;
}
export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {

    // 可用 css={{marginBottom:'2rem'}} (emotion行内样式) 替代下行中的 style={{marginBottom:'2rem'}} 
    // 来规避react自带的行内样式的不足，需添加以下引入代码来支持使用
    // /** @js jsx */
    // import {jsx} from '@emotion/react"
    return <Form style={{marginBottom:'2rem'}} layout={"inline"}>
        <Form.Item>
            {/* setParam(Object.assign({}, param, {name:evt.target.value})) */}
        <Input 
        placeholder={"Project name"}
        type="text" 
        value={param.name} 
        onChange={evt => setParam({
            ...param,
            name: evt.target.value
        })} />
        </Form.Item>
        <Form.Item>
        <Select 
        value={param.personId} 
        onChange={value => setParam ({
            ...param,
            personId: value
        })}>
            <Select.Option value={''}>Person in charge</Select.Option>
            {users.map((user: User) => (
            <Select.Option key={user.id} value={user.id}>
                {user.name}
                </Select.Option>
                ))}
        </Select>
        </Form.Item>
    </Form>
}