import Menu from './components'
import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Rotas from './rotas';
import './App.css';
function App() {
  return (<BrowserRouter>
  <div className="App">
     <header>
       <Menu/>
       </header> 
    </div>
    <main>
      <Container fluid>
        <Rotas/>
      </Container>
    </main>
  </BrowserRouter>
    
  );
}

export default App;
