import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';

import './assets/css/style.css';
import './assets/css/tachyons.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/com-frete">
          <Cart />
        </Route>
        {/* <Route path="/sem-frete">
          <MainPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
