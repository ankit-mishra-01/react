import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="mishraji.com" headings={{one:"Home",two:"About",three:"Contact"}}/>
    
    <TextForm/>
    </>
  );
}

export default App;
