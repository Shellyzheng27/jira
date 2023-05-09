import React from "react"
import { User } from "./search-panel";
import { Table } from "antd"

interface Project {
    id: string;
    name: string;
    personId:string;
    pin: boolean;
    organization: string;
}
interface ListProps {
    list: Project[],
    users: User[]
}

export const List = ({list, users}: ListProps) => {
    return <Table pagination={false} columns={[{
        title: "Project name",
        dataIndex: 'name',
        // 使data按字母排序：localCampare 可用于排序中文字符
        sorter:(a,b) => a.name.localeCompare(b.name)
    }, {
        title:'Person in charge',
        render(values, project){
        return <span>
            {users.find(user => user.id === project.personId)?.name || "Unknown"}
            </span>
            }
    }]} dataSource={list}/>
    // 使用antd前的代码
    // return <table>
    //     <thead>
    //         <tr>
    //             <th>Project name</th>
    //             <th>Person in charge</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             list.map(project => <tr key={project.id}>
    //                 <td>{project.name}</td>
    //                 {/* undefined.name */}
    //                 <td>{users.find(user => user.id === project.personId)?.name || "Unknown"}</td>
    //             </tr>)
    //         }
    //     </tbody>
    // </table>
}