import { Component } from 'react';
import './search-panel.css'

// 1) создаем локальный term
//2) записываем туда данные из Input. 
//3) отправляем локальный term в App. Cинхронизируем с глобальм уже в App.js

class searchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchLocal = (e) => {
        const term = e.target.value; //записываем в term значение input
        this.setState({term}); // изменяем term в state
        this.props.onUpdateSearchGlobal(term) // отправляем  term на верх в app.js
    }

    render() {
        return (
            <input type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={this.state.term}
            onChange={this.onUpdateSearchLocal}/>
        )
    }
}

export default searchPanel;