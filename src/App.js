import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import Home from "./pages/Home";
import SignIn from './pages/signin';
import PageImages from './pages/pageImages';
import PageVideos from './pages/pageVideos';
import PageFree from './pages/pageFree';
import RegisterPage from './pages/register/index';

function App() {


  return (
    <>
    <Router>
    <Switch>
      <Route path='/' component={Home} exact/>  
      <Route path='/page1' component={PageImages}/>
      <Route path='/page2' component={PageVideos}/>
      <Route path='/signin' component={SignIn} />
      <Route path='/page3'  component={PageFree}/>
      <Route path='/register'  component={RegisterPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
