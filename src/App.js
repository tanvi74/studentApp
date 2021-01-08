import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Homepage from './components/Homepage';
import Marks from './components/Marks';
import Leaderboard from './components/Leaderboard'

function App() {
  return (
    <div className="App">
      <Router>
       <Route exact path="/" component={Homepage}/>
       <Route exact path="/marks" component={Marks} />
       <Route exact path="/leaderboard" component={Leaderboard}/>
     </Router>
    </div>
  );
}

export default App;
