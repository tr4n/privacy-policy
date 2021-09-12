import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DogBreeds from './components/DogBreeds'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dog-breeds">
            <DogBreeds />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
