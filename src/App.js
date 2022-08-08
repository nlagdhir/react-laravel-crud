import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.js';
import Create from './pages/Create';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to={"/"} className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
            <Link to={"/create"} className='nav-link'>Create</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
        
      </Routes>

    </div>

  );
}

export default App;
