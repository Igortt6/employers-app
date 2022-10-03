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
                {name: 'Junior S', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Midle A', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Senior B', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term:'',
            filter: ''
        }
        this.maxId = 4;

    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !==id)
            } 
        })

    }      
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    // возвращаем новый объект, со свойством data с новым массивом (.map(), через кол бек функцию). Если id совпали, возвращаем новый объет. Или возвращаем новый измененный объет
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'moreThan1000': 
                return items.filter(item => item.salary > 1000);
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    onSalaryInputChange = (newSalary, name) => {
        this.setState(({data}) => ({
            data: data.map(id => {
                if (id.name === name) {
                    return {...id, salary: newSalary}
                }
                return id
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increase={increase}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearchGlobal={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                {/* назначаем в пропсы - массив данных */}
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onSalaryInputChange={this.onSalaryInputChange}/> 
                <EmployeesAddForm
                    onAdd={this.addItem}/>
           </div>
        );
    }
}

export default App;
