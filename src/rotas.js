import {Switch,Route} from 'react-router-dom';
import {Router}  from 'react-router-dom';
import Home from './paginas/index'
import Contato from './paginas/contato'
import Lojas from './paginas/nossas lojas'
import Produtos from './paginas/produtos'

function Rotas(){
    return(
        <Switch>
            <Route exact path="/"component={ Home }/>
            <Route exact path="/contato"component={Contato}/>
            <Route exact path="/lojas"component={Lojas}/>
            <Route exact path="/produtos"component={Produtos}/>
            
           
            
        </Switch>
    )
};
export default Rotas;