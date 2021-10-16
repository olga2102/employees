import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employess-list/employees-list";
import EmployeesAddForm from "../form/form";

import "./app.css";
// import EmployeesListItem from "../employees-list-item/employees-list-item";

function App() {

    const data = [
        {name: 'John', salary: 8000, increase: true},
        {name: 'Bill', salary: 1000, increase: true},
        {name: 'Sam', salary: 600, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;