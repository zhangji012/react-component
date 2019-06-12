import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'


import './App.css';

function App() {

  return (
    <Router>
      <div>
        {/*exact确切为/时，才会匹配。否则在下面2个路由中，都会显示第一个路由*/}
        <Route path='/' exact={true} component={Demo3}></Route>
        <Route path={'/demo1'} component={Demo1}></Route>
        <Route path={'/demo2'} component={Demo2}></Route>
        <Route path={'/demo3'} component={Demo3}></Route>

      </div>
    </Router>

  );
}

export default App;
