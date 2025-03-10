import React,{useState,useEffect} from 'react'
import {Button,Nav,Navbar,Offcanvas,Container,Form,NavDropdown,Row,Col} from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home';
import AddRooms from './Pages/Add_room'
import Inventory from './Pages/Inventory';
import Test from './test';
import Mainataince from './Pages/Maintaince';
import StudentAdd from './Pages/StudentsAdd';
import { useNavigate } from "react-router-dom";
import AllStudentsData from './Pages/AllStudentsData'
import DueFinder from './Pages/DueFinder';

const App = () => {
  const [token, settoken] = useState(false)
  // let nav=useNavigate();

    if(token){
        sessionStorage.setItem('token',JSON.stringify(token))
    }

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            let data=JSON.parse(sessionStorage.getItem('token'))
            settoken(data)
        }
    },[])

    const logout=()=>{
      sessionStorage.clear(token)
      //nav('/')
        // useNavigate('/')
    }
    
  return (
    <div>
        <Router>
            {token?<>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/home' style={{color:'white',textDecoration:'none'}}>Dormitory Automation</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link ><Link to='/Inventory' style={{color:'#808080',textDecoration:'none'}}>Inventory</Link></Nav.Link>
            <Nav.Link ><Link to='/Maintaince' style={{color:'#808080',textDecoration:'none'}}>Maintaince</Link></Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to='/AddRooms' style={{color:'black',textDecoration:'none'}}> Rooms</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/StudentsAdd' style={{color:'black',textDecoration:'none'}}>Add Students</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/AllStudents' style={{color:'black',textDecoration:'none'}}>All Students</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Water Level [Beta]
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link><Link to='/DueFinder' style={{color:'#808080',textDecoration:'none'}}>Due Finder</Link></Nav.Link>
          {/* <Nav.Link><Link to='/Kitchen' style={{color:'#808080',textDecoration:'none'}}>Kitchen</Link></Nav.Link> */}
          <NavDropdown title="Kitchen" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to='/Kitchen' style={{color:'black',textDecoration:'none'}}>Add Items To Kitchen</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/KitchenInv' style={{color:'black',textDecoration:'none'}}>View Kitchen</Link></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>:<></>}
            <Routes>
                <Route path='/' element={<Login settoken={settoken} />}/>
                {
                token?<>
                <Route path='/home' element={<Home settoken={settoken}/>}/>
                <Route path='/AddRooms' element={<AddRooms/>}/>
                <Route path='/Inventory' element={<Inventory/>}/>
                <Route path='/Maintaince' element={<Mainataince/>}/>
                <Route path='/StudentsAdd' element={<StudentAdd/>}/>
                <Route path='/AllStudents' element={<AllStudentsData/>}/>
                <Route path='/DueFinder' element={<DueFinder/>}/>
                <Route exact path='*' element={<>Hello</>}/>
                <Route path='/test' element={Test}/>
                </>:<>Not Auth</>
                }
                <Route path='*' element={<>No Auth go <Link to='/'>Home</Link></>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App