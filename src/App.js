import './assets/css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

// import { auth } from './firebase';
// import { useStateValue } from './components/StateProvider'

function App() {
  return (

    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        

    </div>
    </Router>
    
  );
}

export default App;
