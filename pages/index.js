import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
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
        <img src="https://via.placeholder.com/1750x1000.png" style={{ width: '100%' }} />
        <br />
        <br />
        <Row>
            <Col><img src="https://via.placeholder.com/800x600.png" style={{ width: '100%', display: 'flex' }} /></Col>
            <Col><Container style={{ align: 'right' }}>
                <h3 style={{ textAlign: 'center' }}>Apprenticeship</h3>
                <p>Our founder, Jonathan Tsai, started an apprenticeship program at A&R to train and equip aspiring Christian software engineers with tangible skills. In the SF Bay Area there is an ever-increasing number of people coming out of coding bootcamps trying to transition into software roles from other industries. Unfortunately, opportunities for bootcamp grads have severely declined since 2015 and many people are struggling to find employment after investing substantially into building their coding skills</p>
            </Container></Col>
        </Row>
        </>
    )
}
