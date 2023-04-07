import {BrowserRouter, Route} from 'react-router-dom'
import firstPage from './components/firstPage'
import secondPage from './components/secondPage'
import thirdPage from './components/thirdPage'
import './App.css'
import Header from './components/Header'

const App = () => (
  <div className="Main-container">
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={firstPage} />
      <Route exact path="/secondPage" component={secondPage} />
      <Route exact path="/thirdPage" component={thirdPage} />
    </BrowserRouter>
  </div>
)

export default App
