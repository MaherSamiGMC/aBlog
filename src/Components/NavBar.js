import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import {
    BrowserRouter as Router,
    
  } from "react-router-dom";
  import { glide,Link } from "react-tiger-transition";


glide({
    name: 'glide-left'
  });

 
const NavBarPage=()=>{
    return (
        <div className="NavBar">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My blog</Navbar.Brand>
        
        <Nav className="mr-auto">
            
        <Link className="link" to="/" transition='drop-left' >  Home Page </Link>
          <Link className="link"  to="/addArticle" transition='drop-left' > Add an Article</Link>
          <Link className="link" to="/ListOfArticles" transition='drop-left' >My articles</Link>
         
        </Nav>
        
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      </div>
      
    )

}
export default NavBarPage