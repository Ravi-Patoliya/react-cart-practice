import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Navigation from './componants/Navigation';
import Products from './componants/Products';
import Cart from './pages/Cart';

function App() {
    return (
        <>
            <Router>
               <Navigation/>
              
                <Switch>
                    <Route path='/' component={Home} exact></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/product' component={Products}></Route>
                    <Route path='/cart' component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;