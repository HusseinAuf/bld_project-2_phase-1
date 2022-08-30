import "./App.css"
import Header from './component/Header';
import Card from './component/Card';
import {python_header , python_courses} from './constants/db.js'
const App = () => {
    return (
    <div className="App">
      <Header data={python_header}/>
      <Card data={python_courses}/>
    </div>
    );
}

export default App;
