import { Routes, Route } from "react-router-dom";
import Profile from '../pages/Profile.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Profile />} />
    </Routes>
  );
}
export default App;