import {Navbar,Nav} from 'react-bootstrap';
import{Link,withRouter} from 'react-router-dom';
import'./Menu.css';
 function FsMenu(props) {
  const location = props
return (
        <Navbar className="navbar-dark"bg="danger"expand="lg"fixed="top">
            <Navbar.Brand>
                Full Stack Eletro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-Menu"/>
            <Navbar.Collapse id="item-Menu">
                <Nav activeKey={location.pathname} className="ml-auto m-3">
                <Nav.Item>
                <Nav.Link as={Link} href="/"to ="/"> Página Inicial</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link}  href="/produtos"to ="/produtos"> Produtos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link}   href="/contato"to ="/contato"> Contatos</Nav.Link>
                </Nav.Item>
                 <Nav.Item>
                <Nav.Link  href="/lojas"to ="/lojas"> Nossas lojas</Nav.Link>
                </Nav.Item>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
};
const Menu= withRouter(FsMenu);
export default Menu;