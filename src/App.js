import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import {useStateValue} from './StateProvider'
import Footer from './Footer';

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? 
    <>
      <Login/>
      <Footer/>
      </> : (
      <>
      <Header/>
     <div className="app__body">
       <Sidebar/>
       <Feed/>
       <Widgets/>
       
     </div>
     <Footer/>
    
    </>
    )}
    </div>
  );
}

export default App;
