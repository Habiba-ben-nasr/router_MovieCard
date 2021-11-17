// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";	
// //import SearchStudent from "../Filting/Searching";
// import AddMovie from "../MovieForm/AddMovie";
// import "./NavBar.css";
// import ReactStars from 'react-stars';



// const NavBar = ({ addMovie, setFilterByTitle , setSearchRating}) => {
//   return (
 
//      <Navbar bg="dark" variant="dark" className='hassen'>
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             {/* <ReactStars className="navRating"
//       count={5}
//       onChange={(e)=>setSearchRating(e)}
//       size={24}
//       color2={'#ffd700'} />
//       <input onChange={(e)=>setFilterByTitle(e.target.value)} type='text'/> */}
//           </Nav>
          
//           <AddMovie addSMovie={addMovie} />
//         </Container>
//       </Navbar>
//   );
// };
// export default NavBar;


import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css"; 
import AddMovie from '../MovieForm/AddMovie';
import ReactStars from 'react-stars';
import SearchMovie from "../Fillter/SearchMovie";
import { NavLink } from "react-router-dom";




const NavBar = ({ setFilterByTitle,  addMovie , setSearchRating}) =>{

return(
  <div >
<Navbar className="color-Nav"  variant="light" >
    <Container>
    <Navbar.Brand href="#home"> Kids </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home"> Home </Nav.Link>
      <NavLink to="/"> Movies </NavLink>
      <Nav.Link href="#pricing"> Series </Nav.Link>
      

      
      <SearchMovie  setFilterByTitle={setFilterByTitle} />
     
    </Nav> 
    <ReactStars className="navRating"
      count={5}
      onChange={(e)=>setSearchRating(e)}
      size={24}
      color2={'#ffd700'} 
      edit={true}/>
    </Container>
    

      <AddMovie  addMovie={addMovie} style={{marginRight:'500px'}}/>

     
  </Navbar>
  </div>
);
};
export default NavBar;