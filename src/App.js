import './App.css';
import AuthProvider from './Context/AuthContext';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './AuthPages/Login';
import Signup from './AuthPages/Signup';
import ForgotPassword from './AuthPages/ForgotPassword';
import PrivateRoute from './AuthPages/PrivateRouter';
import Homepage from './Pages/Homepage';
import StarterPage from './StarterPage';
import Predict from './Pages/Predict'
import Schemes from './Pages/Schemes'
import Calculate from './Pages/Calculate'
import Basics from './Pages/Basics'
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
          <PrivateRoute exact path='/homepage' component={Homepage}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/password' component={ForgotPassword}/>
          <Route path='/login' component={Login}/>
          <Route path='/predict' component={Predict}/>
          <Route path='/schemes' component={Schemes}/>
          <Route path='/basics' component={Basics}/>
          <Route path='/calculate'component={Calculate}/>
          <Route path='/' component={StarterPage}/>
         
          </Switch>
        
        </AuthProvider> 
      </Router>
    </div>
  );
}

export default App;
