import logo from './logo.svg';
import './App.css';
import FocusApp from './components/FocusApp';
import CopyApp from './components/CopyApp';
import MediaPlayer from './components/MediaPlayer';

function App() {
  return (
    <div className="App">
      <hr/><hr/>
      <MediaPlayer/>
      <hr/><hr/>
      <CopyApp/>
      <hr/>
      <hr/>
      <FocusApp/>
      <hr/><hr/>
    </div>
  );
}

export default App;
