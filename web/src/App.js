import Register from "./Pages/Register";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Register/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
