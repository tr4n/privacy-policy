import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import DogBreeds from './components/DogBreeds'
import ToeicVocabulary from './components/ToeicVocabulary'

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dog-breeds">
            <DogBreeds />
          </Route>
          <Route path="/">
            <ToeicVocabulary />
          </Route>
          <Route path="/toeic-vocabulary">
            <ToeicVocabulary />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
