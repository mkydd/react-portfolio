// import MenuButton from "./components/MenuButton";
import './styles/styles.css'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      </div>
    </div>
  );
}

export default App;
