import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import Feed from './components/Feed';
import Faq from './components/Faq';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={Page}/>
          <Route path="/feed" component={Feed}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/notfound" component={NotFound}/>
          <Route path="*">
        <Redirect to='/notfound' />
        </Route>
        </Switch>
        <Footer />
   </Router>
   
  );
}

export default App;
