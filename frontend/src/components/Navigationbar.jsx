
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo1 from './utility/logo1.png';
import Button from 'react-bootstrap/Button';

export function Navigationbar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: 'white', height: '80px', paddingTop: '0', paddingBottom: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo1}
                            width="140"
                            height="70"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center' }}>
                            <Button type="submit" variant="primary" style={{ marginRight: '10px' }}>Login</Button>
                            <Button variant="primary">Sign Up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
