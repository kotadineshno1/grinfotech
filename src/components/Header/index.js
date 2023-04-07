import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-bar">
    <div>
      <Link className="nav-link" to="/">
        Getasample
      </Link>
    </div>
    <div>
      <Link className="nav-link2" to="/secondPage">
        Bluidyouricp
      </Link>
    </div>
    <div>
      <Link className="nav-link3" to="/thirdPage">
        icpreports
      </Link>
    </div>
  </div>
)

export default Header
