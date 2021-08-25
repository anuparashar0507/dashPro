import React from 'react'

const TableRow = (props) => {
    return (
     
        <tr key = {props.key}>
            <td>{props.formCode}</td>
            <td>{props.formName}</td>
            <td>{props.name}</td>
            <td>{props.appDate}</td>
            <td>{props.appTime}</td>
            <td>{props.phone}</td>
        </tr>
       
    )
}

export default TableRow
