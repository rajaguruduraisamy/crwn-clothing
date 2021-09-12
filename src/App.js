import { Switch, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>Hats Page</div>
  )
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
