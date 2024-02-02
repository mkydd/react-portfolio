import './styles/styles.css'
import './styles/largeStyles.css'
import { Routes, Route } from 'react-router';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import BurgerMenu from './components/BurgerMenu';
import useScreenSize from './components/useScreenSize';
import Menu from './components/Menu';


function App() {
  const screenSize = useScreenSize();
  console.log(`screen width = ${screenSize.width}`)

  return (
    <div className="app">
      { screenSize.width < 1200 ? <BurgerMenu /> : <Menu />}
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      
    </div>
  );
}

export default App;
