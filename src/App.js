
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/App.css';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Blog from './components/pages/Blog';
import DocSignUp from './components/pages/DocSignUp';
import PatSignUp from './components/pages/PatSignUp';

 import DocProfile from './components/pages/DocProfile';
 import PatProfile from './components/pages/PatProfile';
 import Category from './components/Category';
 import Slot from './components/Slot';
 import AddSlot from './components/AddSlot';
 import viewSlot from './components/viewSlot';



function App() {
  return (
      
    <>
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/blog' exact component={Blog} />
          <Route path='/doctorSignUp' exact component={DocSignUp} />
           <Route path='/patientSignUp' exact component={PatSignUp}/>
           <Route path='/doc' exact component={DocProfile} />
          <Route path='/pat' exact component={PatProfile} />
          <Route path='/cat/:category' exact component={Category} />
          <Route path='/slot/:id' exact component={Slot} />
          <Route path='/addSlot' exact component={AddSlot} />
          <Route path='/viewSlot' exact component={viewSlot} /> 
        
      </Switch>
    </Router>
  </>
  
  );
}

export default App;
