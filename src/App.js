import logo from './logo.svg';
import './App.css';
import Classcom from './components/classcom' 
import Funcom from './components/funcomp'
import Design from './components/design'
import Color from './components/Color'
import Cl from './components/Cl'
import Cj from'./components/Cj'
import Cv from'./components/Cj'
import Comdid from './components/comdid';
import Fcom from './components/fcom';
import Axioss from './components/axios'
import Todo from './components/todo'
import Student from './components/Student'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ErrorPage from './components/Errorpage'
import ReduxTutorial  from './components/ReduxTut';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Ecommerce from './components/ecommerce';
import Sidebar from './components/sidebar';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='*' component={ErrorPage}></Route>
        </Switch>
      </BrowserRouter> */}
      {/* <Provider store={store}> */}
        {/* <ReduxTutorial/> */}
      {/* </Provider> */}
      <Ecommerce />
      <div id='cable-split'>
      <Sidebar />
      {/* <Maincontent/> */}
      </div>
    </div>
  );
}

export default App;
