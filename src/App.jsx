
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './server'
import Vans from './pages/Vans';
import VansDetails from './pages/VansDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/Vans/HostVans';
import HostVansDetails from './pages/Host/Vans/HostVansDetails';
import HostVanInfo from './pages/Host/Vans/HostVansDetails/HostVanInfo';
import HostVanPhoto from './pages/Host/Vans/HostVansDetails/HostVanPhoto';
import HostVanPrice from './pages/Host/Vans/HostVansDetails/HostVanPrice';

function App() {
  return (
    <>
     <BrowserRouter>
     
     <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='vans' element={<Vans/>}/>
      <Route path='vans/:id' element={<VansDetails/>}/>
      
<Route path='host' element={<HostLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='income' element={<Income/>}/>
      <Route path='vans' element={<HostVans/>}/>
      <Route path='vans/:id' element={<HostVansDetails/>}>
      <Route index element={<HostVanInfo/>}/>
        <Route path='photo' element={<HostVanPhoto/>}/>
        <Route path='price' element={<HostVanPrice/>}/>
      </Route>
      
        
      

      <Route path='reviews' element={<Reviews/>}/>
      </Route>
      </Route>

    
      
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
