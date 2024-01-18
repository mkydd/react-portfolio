import './styles/styles.css'
import { Routes, Route } from 'react-router';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu'


function App() {
  return (
    <div className="App" id="outer-container">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
      <Menu />
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
