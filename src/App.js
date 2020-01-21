import React from 'react';
import {
    BrowserRouter as Router,
    Route,Switch
} from 'react-router-dom'


import './App.scss'
import Login from './login';

function App() {

  
    
   
   
  
    return (
        <>
<Router>
    <Switch>
    <Route path="/" component={Login}/>
    </Switch>
    </Router>
       


          
               
        </>
    )


}
export default App