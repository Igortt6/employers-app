import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Junior S', salary: 800, increase: false, id: 1},
                {name: 'Midle A', salary: 3000, increase: true, id: 2},
                {name: 'Senior B', salary: 5000, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !==id)
            } 
        })

    }      
    

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                {/* назначаем в пропсы - массив данных */}
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/> 
                <EmployeesAddForm/>
    
           </div>
        );
    }
}

export default App;
