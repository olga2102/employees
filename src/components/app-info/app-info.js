import "./app-info.css"

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <p>Общее число сотрудников: {employees}</p>
            <p>Премию получат: {increased}</p>
        </div>
    )
}

export default AppInfo;