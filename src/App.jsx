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
        <Route path="/withFee">
          <Cart withFee={true} />
        </Route>
        <Route path="/withoutFee">
          <Cart withFee={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
