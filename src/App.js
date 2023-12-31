import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Category } from './pages/Category';
import { Meal } from './pages/Meal';

function App() {
  return (
    <>
      <Router basename='/spa-catalog'>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contacts' component={Contact} />
            <Route path='/category/:name' component={Category} />
            <Route path='/meal/:id' component={Meal} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
