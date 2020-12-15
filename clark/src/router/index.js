import {Switch, Route, HashRouter as Router, Redirect} from 'react-router-dom';
import Login from 'pages/login/index'
import LayOut from 'components/mymenu/index'

export default ()=>{
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={LayOut} />
      </Switch>
    </Router>
  );
};
