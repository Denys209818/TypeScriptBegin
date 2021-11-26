import React from "react";

const Table:React.FC = (props) => 
{
    return (<table className="table table-striped mt-3">
        <thead className="table-dark">
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Назва</th>
                <th scope="col">Опис</th>
                <th scope="col">Ціна</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>);
}

export default Table;