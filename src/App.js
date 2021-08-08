import './App.css';
import AuthProvider from './Context/AuthContext';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './AuthPages/Login';
import Signup from './AuthPages/Signup';
import ForgotPassword from './AuthPages/ForgotPassword';
import PrivateRoute from './AuthPages/PrivateRouter';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>

          <PrivateRoute exact path='/homepage' component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/password' component={ForgotPassword}/>
          <Route path='/' component={Login}/>
          </Switch>
        
        </AuthProvider> 
      </Router>
    </div>
  );
}

export default App;
