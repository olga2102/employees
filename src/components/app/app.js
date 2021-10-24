import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employess-list/employees-list";
import EmployeesAddForm from "../form/form";

import "./app.css";
// import EmployeesListItem from "../employees-list-item/employees-list-item";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 8000, increase: true, id:1, like: true},
                {name: 'Bill', salary: 1000, increase: true, id:2, like: false},
                {name: 'Sam', salary: 600, increase: false, id:3, like: false}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id)=> {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after= data.slice(index+1);
            const newArray = [...before, ...after];

            return {
                data: newArray
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
       this.setState(({data})=> {
           const index = data.findIndex(elem => elem.id===id);

           const old = data[index];
           const newItem = {...old, increase: !old.increase};
           const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

           return {
               data: newArr
           }
       })
    }

    onToggleLike = (id) => {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id===id);
 
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
 
            return {
                data: newArr
            }
        })
    }

    searchEmployee = (items, term) => {
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
            case 'like': 
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                 return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(data, term), filter);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;