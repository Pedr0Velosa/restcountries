import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import NotFound from './pages/NotFound';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.title = 'Countries';
  }, []);

  return (
    <main
      id='main'
      className={!isDarkMode ? '' : 'dark'}
      style={!isDarkMode ? {
        backgroundColor: 'hsl(0, 0%, 98%)',
        color: 'hsl(200, 15%, 8%)'
      } : {
        backgroundColor: 'hsl(207, 26%, 17%)',
        color: 'hsl(0, 0%, 100%)'
      }
      }
    >
      <BrowserRouter>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path='/' element={<Navigate to='/restcountries' replace />} />
          <Route path='/restcountries' element={<Home />} />
          <Route path='/details/:name/:ccn3' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </main>
  );
}

export default App;
