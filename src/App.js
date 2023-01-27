import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import './App.css';
import { Header , Container} from './section/index'
import { Home , About ,Services ,Team ,Support , Clients} from './pages/index'

function App() {
  return (
    <>
    <Router>
    <Header/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/support' element={<Support/>}/>
        </Routes>
      
    </Router>
      
      
    </>
  )
}

export default App;
