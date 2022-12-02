import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Profile from '../pages/Profile.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;