import EmployeesListItem from "../employers-list-item/employers-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item =>  {
        // Деструктурируем пропс Id от других пропсов
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;