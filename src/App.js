import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/headers/Header';
import DisplayPlayer from './components/DisplayPlayer/DisplayPlayer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DisplayPlayer></DisplayPlayer>
    </div>
  );
}

export default App;
