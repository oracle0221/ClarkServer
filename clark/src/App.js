import 'antd/dist/antd.css';
import './App.css';
import { Button } from 'antd';
import {Switch, Route} from 'react-router-dom';
import Login from 'pages/login/index'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
