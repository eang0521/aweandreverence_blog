import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'

export default function Home() {
    return (
        <>
        <Head>
            <link rel="icon" href="images/Logo.png" /><title>Awe & Reverence</title>
        </Head>
        <Navbar fixed= 'top' style={{ backgroundColor: 'rgba(200, 200, 200, 0)' }}>
            <Navbar.Brand href="#home" style={{ fontFamily: 'TimesNewRoman', textAlign: 'center' }}>A w e &nbsp; &<br />R e v e r e n c e</Navbar.Brand>
            <Nav className="ml-auto" style={{ fontFamily: 'TimesNewRoman', float: 'right', textAlign: 'right' }}>
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#blog">BLOG</Nav.Link>
                <Nav.Link href="https://maskil.church" target="_blank">MASKIL</Nav.Link>
                <Nav.Link href="#apprenticeship">APPRENTICESHIP</Nav.Link>
            </Nav>
        </Navbar>
        <img src="https://via.placeholder.com/1800x1000.png" style={{ width: '100%' }} />
        <br />
        <br />
        <Row style={{ fontFamily: 'TimesNewRoman', width: '80%', margin: 'auto' }}>
            <Col><img src="https://via.placeholder.com/900x600.png" style={{ width: '100%' }} /></Col>
            <Col><Container style={{ width: '100%', height: '100%', position: 'relative' }}><Container style={{ margin: 0, position: 'absolute', top: '50%', MsTransform: 'translateY(-50%)', transform: 'translateY(-50%)' }}>
                <h3 style={{ textAlign: 'center' }}><b>Apprenticeship</b></h3>
                <p>Our founder, Jonathan Tsai, started an apprenticeship program at A&R to train and equip aspiring Christian software engineers with tangible skills. In the SF Bay Area there is an ever-increasing number of people coming out of coding bootcamps trying to transition into software roles from other industries. Unfortunately, opportunities for bootcamp grads have severely declined since 2015 and many people are struggling to find employment after investing substantially into building their coding skills</p>
                <br />
                <Button href="#apprenticeship" variant="outline-dark" style={{ margin: 'auto', display: 'block', width: '35%' }}>LEARN MORE</Button>            
            </Container></Container></Col>
        </Row>
        <br /><hr style={{ width: '80%', height: '1px', backgroundColor: '#c8c8c8' }} /><br />
        <Container style={{ fontFamily: 'TimesNewRoman', width: '80%', margin: 'auto' }}>
            <h3 style={{ textAlign: 'center' }}><b>Who We Are</b></h3>
            <p style ={{ textAlign: 'center', width: '60%', margin: 'auto' }}>Awe & Reverence (A&R) is a software company commited to building a God-glorifying, for-profit (read: sustainable), for-Kingdom benefit, cutting-edge Christian software company.</p>
            <br />
            <Button href="#about" variant="outline-dark" style={{ margin: 'auto', display: 'block', width: '16%' }}>READ MORE</Button>
        </Container>
        <br /><hr style={{ width: '80%', height: '1px', backgroundColor: '#c8c8c8' }} /><br />    
        </>
    )
}
