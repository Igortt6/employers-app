import EmployeesListItem from "../employers-list-item/employers-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryInputChange}) => {

    const elements = data.map(item =>  {
        // Деструктурируем пропс Id от других пропсов
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onSalaryInputChange={onSalaryInputChange}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;