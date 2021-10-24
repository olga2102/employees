import "./employees-list.css"

import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {

    const elements = data.map((item) => {
        return <EmployeesListItem 
        name={item.name} salary={item.salary} key={item.id} increase={item.increase} like={item.like}
        onDelete={()=> onDelete(item.id)}
        onToggleIncrease={()=> onToggleIncrease(item.id)}
        onToggleLike={()=> onToggleLike(item.id)}/>
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;