import './App.css'
import DressUpGame from './games/DressUpGame/DressUpGame'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MainPage from './MainPage';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Memory from './games/MemoryGame/MemoryGame';
import { ChapterSelectionText, GameSelectionText, NavBarText, VideoSelectionText } from './text-constants';
import { Chapters } from './pages/chapters/chapter-constants';
import ChapterPage from './pages/chapters/ChapterPage';
import PaintGame from './games/Paint/PaintGame';
import MagicGame from './games/MagicGame/MagicGame';
import './colors.css';
import VideoPage from './pages/videos/VideoPage';
import chapter1Animation from './assets/animations/chapter1.mp4'
import chapter2Animation from './assets/animations/chapter2.mp4'
import chapter3Animation from './assets/animations/chapter3.mp4'
import chapter4Animation from './assets/animations/chapter4.mp4'
import OverviewPage from './pages/chapters/OverviewPage';
import overviewGame1Img from './assets/overviewImages/games/sampleImg_Dressup.png';
import overviewGame2Img from './assets/overviewImages/games/sampleImg_memory.png';
import overviewGame3Img from './assets/overviewImages/games/sampleImg_magic.png';
import overviewGame4Img from './assets/overviewImages/games/sampleImg_paint.png';
import chapterSelectionHeaderImage from './assets/headerImages/chapterSelectionHeader.jpeg';
import gameSelectionHeaderImage from './assets/headerImages/gameSelectionHeader.jpeg';
import videoSelectionHeaderImage from './assets/headerImages/videoSelectionHeader.jpeg';
import chapter1HeaderImage from './assets/headerImages/chapter1Header.jpeg';
import chapter2HeaderImage from './assets/headerImages/chapter2Header.jpeg';
import chapter3HeaderImage from './assets/headerImages/chapter3Header.jpeg';
import chapter4HeaderImage from './assets/headerImages/chapter4Header.jpeg';
import chapter1Thumbnail from './assets/overviewImages/chapters/chapter1.png';
import chapter2Thumbnail from './assets/overviewImages/chapters/chapter2.png';
import chapter3Thumbnail from './assets/overviewImages/chapters/chapter3.png';
import chapter4Thumbnail from './assets/overviewImages/chapters/chapter4.png';
import chapter1VideoThumbnail from './assets/overviewImages/videos/chapter1.png';
import chapter2VideoThumbnail from './assets/overviewImages/videos/chapter2.png';
import chapter3VideoThumbnail from './assets/overviewImages/videos/chapter3.png';
import chapter4VideoThumbnail from './assets/overviewImages/videos/chapter4.png';

const chapterLinkItems = [
  {linkTo: '/chapters/1', title: 'Kapitel 1', linkImage: chapter1Thumbnail},
  {linkTo: '/chapters/2', title: 'Kapitel 2', linkImage: chapter2Thumbnail},
  {linkTo: '/chapters/3', title: 'Kapitel 3', linkImage: chapter3Thumbnail},
  {linkTo: '/chapters/4', title: 'Kapitel 4', linkImage: chapter4Thumbnail}
];

const gameLinkItems = [
  {linkTo: '/games/1', title: 'Kleidung', linkImage: overviewGame1Img},
  {linkTo: '/games/2', title: 'Memory', linkImage: overviewGame2Img},
  {linkTo: '/games/3', title: 'Zaubern', linkImage: overviewGame3Img},
  {linkTo: '/games/4', title: 'Malen', linkImage: overviewGame4Img}
];

const animationLinkItems = [
  {linkTo: '/videos/1', title: 'Kapitel 1', linkImage: chapter1VideoThumbnail},
  {linkTo: '/videos/2', title: 'Kapitel 2', linkImage: chapter2VideoThumbnail},
  {linkTo: '/videos/3', title: 'Kapitel 3', linkImage: chapter3VideoThumbnail},
  {linkTo: '/videos/4', title: 'Kapitel 4', linkImage: chapter4VideoThumbnail}
];

function renderChapterItem() {
  const chapterItems: JSX.Element[] = [];
  Chapters.forEach(chapter => {
    chapterItems.push(<NavDropdown.Item href={chapter.url} style={{ color: "#2a5069" }}>{chapter.title}</NavDropdown.Item>)
  });
  return chapterItems;
}

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" style={{ backgroundColor: "white" }}>
        <Container style={{}}>
          <Navbar.Brand href="#home"><Nav.Link href="/" style={{ color: "#2a5069" }}>Niki & GruGru</Nav.Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <NavDropdown title={<b style={{ color: "#2a5069" }}>Kapitel</b>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/chapters" style={{ color: "#2a5069" }}>{NavBarText.CHAPTERS_DROPDOWN.OVERVIEW}</NavDropdown.Item>
                {renderChapterItem()}
              </NavDropdown>
              <NavDropdown title={<b style={{ color: "#2a5069" }}>Games</b>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/games" style={{ color: "#2a5069" }}>{NavBarText.CHAPTERS_DROPDOWN.OVERVIEW}</NavDropdown.Item>
                <NavDropdown.Item href="/games/1" style={{ color: "#2a5069" }}>Dress Up</NavDropdown.Item>
                <NavDropdown.Item href="/games/2" style={{ color: "#2a5069" }}>Memory</NavDropdown.Item>
                <NavDropdown.Item href="/games/3" style={{ color: "#2a5069" }}>Zaubern</NavDropdown.Item>
                <NavDropdown.Item href="/games/4" style={{ color: "#2a5069" }}>Malen</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<b style={{ color: "#2a5069" }}>Animationen</b>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/videos" style={{ color: "#2a5069" }}>{NavBarText.CHAPTERS_DROPDOWN.OVERVIEW}</NavDropdown.Item>
                <NavDropdown.Item href="/videos/1" style={{ color: "#2a5069" }}>Kapitel 1</NavDropdown.Item>
                <NavDropdown.Item href="/videos/2" style={{ color: "#2a5069" }}>Kapitel 2</NavDropdown.Item>
                <NavDropdown.Item href="/videos/3" style={{ color: "#2a5069" }}>Kapitel 3</NavDropdown.Item>
                <NavDropdown.Item href="/videos/4" style={{ color: "#2a5069" }}>Kapitel 4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="chapters" element={<OverviewPage headerImg={chapterSelectionHeaderImage} chapterTitle='Kapitel' title={ChapterSelectionText.CHAPTER_SELECTION_TITLE} linkItems={chapterLinkItems} />}></Route>
            <Route path="chapters/1" element={<ChapterPage chapter={Chapters[0]} gameImage={overviewGame1Img} videoImage={chapter1VideoThumbnail} headerImage={chapter1HeaderImage}/>}></Route>
            <Route path="chapters/2" element={<ChapterPage chapter={Chapters[1]} gameImage={overviewGame2Img} videoImage={chapter2VideoThumbnail} headerImage={chapter2HeaderImage}/>}></Route>
            <Route path="chapters/3" element={<ChapterPage chapter={Chapters[2]} gameImage={overviewGame3Img} videoImage={chapter3VideoThumbnail} headerImage={chapter3HeaderImage}/>}></Route>
            <Route path="chapters/4" element={<ChapterPage chapter={Chapters[3]} gameImage={overviewGame4Img} videoImage={chapter4VideoThumbnail} headerImage={chapter4HeaderImage}/>}></Route>
            <Route path="games" element={<OverviewPage headerImg={gameSelectionHeaderImage} chapterTitle='Spiele' title={GameSelectionText.GAME_SELECTION_TITLE} linkItems={gameLinkItems} />}></Route>
            <Route path="games/1" element={<DressUpGame />}></Route>
            <Route path="games/2" element={<Memory />}></Route>
            <Route path="games/3" element={<MagicGame />}></Route>
            <Route path='games/4' element={<PaintGame />}></Route>
            <Route path="videos" element={<OverviewPage headerImg={videoSelectionHeaderImage} chapterTitle='Videos' title={VideoSelectionText.VIDEO_SELECTION_TITLE} linkItems={animationLinkItems} />}></Route>
            <Route path="videos/1" element={<VideoPage chapter={Chapters[0]} animationName={chapter1Animation} />}></Route>
            <Route path="videos/2" element={<VideoPage chapter={Chapters[1]} animationName={chapter2Animation}/>}></Route>
            <Route path="videos/3" element={<VideoPage chapter={Chapters[2]} animationName={chapter3Animation}/>}></Route>
            <Route path='videos/4' element={<VideoPage chapter={Chapters[3]} animationName={chapter4Animation}/>}></Route>
            <Route path="/" element={<MainPage />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className='footer'>Niki & GruGru</div>
    </div>
  )
}

export default App
