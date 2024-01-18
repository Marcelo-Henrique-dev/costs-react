import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Empresa from './components/pages/Empresa';
import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/novoprojeto">Novo Projeto</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/empresa' element={<Empresa />}></Route>
          <Route exact path='/contato' element={<Contato />}></Route>
          <Route exact path='/novoprojeto' element={<NovoProjeto />}></Route>
        </Routes>
        <p>Footer</p>
      </Router>
    
    </div>
  );
}

export default App;
