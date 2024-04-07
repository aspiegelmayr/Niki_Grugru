import React from 'react'
import './App.css'
import DressUpGame from './games/DressUpGame/DressUpGame'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Memory from './games/MemoryGame/MemoryGame';
import ChapterSelectionPage from './pages/chapters/ChapterSelection';
import { NavBarText } from './text-constants';
import { Chapters } from './pages/chapters/chapter-constants';
import ChapterPage from './pages/chapters/ChapterPage';
import PaintGame from './games/Paint/PaintGame';
import MagicGame from './games/MagicGame/MagicGame';

function renderChapterItem(){
  const chapterItems: JSX.Element[] = [];
  Chapters.forEach(chapter => {
    chapterItems.push(<NavDropdown.Item href={chapter.url} style={{color: "#2a5069"}}>{chapter.title}</NavDropdown.Item>)
  });
  return chapterItems;
}

function App() {
  return (
    <div className="App">
    <Navbar fixed="top" style={{backgroundColor: "white"}}>
    <Container style={{}}>
        <Navbar.Brand href="#home"><Nav.Link href="/" style={{color: "#2a5069"}}>Niki & GruGru</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <NavDropdown title={<b style={{color: "#2a5069"}}>Kapitel</b>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/chapters" style={{color: "#2a5069"}}>{NavBarText.CHAPTERS_DROPDOWN.OVERVIEW}</NavDropdown.Item>
              {renderChapterItem()}
            </NavDropdown>
            <NavDropdown title={<b style={{color: "#2a5069"}}>Games</b>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/games/1" style={{color: "#2a5069"}}>Dress Up</NavDropdown.Item>
              <NavDropdown.Item href="/games/2" style={{color: "#2a5069"}}>Memory</NavDropdown.Item>
              <NavDropdown.Item href="/games/3" style={{color: "#2a5069"}}>Zaubern</NavDropdown.Item>
              <NavDropdown.Item href="/games/4" style={{color: "#2a5069"}}>Malen</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<b style={{color: "#2a5069"}}>Animationen</b>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/videos/1" style={{color: "#2a5069"}}>Kapitel 1</NavDropdown.Item>
              <NavDropdown.Item href="/videos/2" style={{color: "#2a5069"}}>Kapitel 2</NavDropdown.Item>
              <NavDropdown.Item href="/videos/3" style={{color: "#2a5069"}}>Kapitel 3</NavDropdown.Item>
              <NavDropdown.Item href="/videos/4" style={{color: "#2a5069"}}>Kapitel 4</NavDropdown.Item>
              <NavDropdown.Item href="/videos/5" style={{color: "#2a5069"}}>Kapitel 5</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<b style={{color: "#2a5069"}}>Info</b>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/videos/1" style={{color: "#2a5069"}}>Kapitel 1</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <BrowserRouter>
    <Routes>
    <Route path="chapters" element={<ChapterSelectionPage />}></Route>
    <Route path="chapters/1" element={<ChapterPage chapter={Chapters[0]}/>}></Route>
    <Route path="chapters/2" element={<ChapterPage chapter={Chapters[1]} />}></Route>
    <Route path="chapters/3" element={<ChapterPage chapter={Chapters[2]} />}></Route>
    <Route path="chapters/4" element={<ChapterPage chapter={Chapters[3]} />}></Route>
    <Route path="chapters/5" element={<ChapterPage chapter={Chapters[4]} />}></Route>
      <Route path="games/1" element={<DressUpGame />}></Route>
      <Route path="games/2" element={<Memory />}></Route>
      <Route path="games/3" element={<MagicGame />}></Route>
      <Route path='games/4' element={<PaintGame/>}></Route>
      <Route path="/" element={<MainPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
