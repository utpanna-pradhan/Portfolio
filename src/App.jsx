
import './App.css'
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';



function App() {


  return (
 <>
  <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
  <BrowserRouter>
  <Home />
  </BrowserRouter>
   
    </div>
 </>
  )
}

export default App
