import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Empresa from './components/pages/Empresa';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projetos from './components/pages/Projetos';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Container customClass="min_height"><Home /></Container>}></Route>
          <Route exact path='/empresa' element={<Container customClass="min_height"><Empresa /></Container>}></Route>
          <Route exact path='/contato' element={<Container customClass="min_height"><Contato /></Container>}></Route>
          <Route exact path='/novoprojeto' element={<Container customClass="min_height"><NovoProjeto /></Container>}></Route>
          <Route exact path='/projetos' element={<Container customClass="min_height"><Projetos /></Container>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    
    </div>
  );
}

export default App;
