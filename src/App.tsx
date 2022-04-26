import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Disclaimer from './pages/disclaimer';
import Utilities from './pages/utilities';
import Landing from './pages/landing';
import MintingPage from './pages/minting';

function App() {
  const { t } = useTranslation(['navbar']);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/mint' element={<MintingPage />} />
        <Route path='/utilities' element={<Utilities />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
