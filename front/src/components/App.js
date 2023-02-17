import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/:id' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;