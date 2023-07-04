import './app-info.css'

const  AppInfo = ({employees, increase}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Че</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    )
}
export default AppInfo;