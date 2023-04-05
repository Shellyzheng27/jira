import React from "react"

export const List = ({list, users}) => {
    return <table>
        <thead>
            <tr>
                <th>Project name</th>
                <th>Person in charge</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project => <tr key={project.id}>
                    <td>{project.name}</td>
                    {/* undefined.name */}
                    <td>{users.find(user => user.id === project.personId)?.name || "Unknown"}</td>
                </tr>)
            }
        </tbody>
    </table>
}