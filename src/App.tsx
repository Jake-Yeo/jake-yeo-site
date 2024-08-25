import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='*' element={<></>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
