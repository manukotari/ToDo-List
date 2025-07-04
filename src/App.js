import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'

  /* The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <div id='container'>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='nav_item
          ' href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav_item
          ' eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav_item
          ' eventKey="link-2">More</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='nav_item
          ' eventKey="disabled" >
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
   </div>
  );
}

export default App;
