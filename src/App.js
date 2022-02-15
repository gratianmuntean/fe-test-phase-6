import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Ex01 from './ex1';
import Ex02 from './ex2';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ex01 />} />
        <Route path="1" element={<Ex01 />} />
        <Route path="2" element={<Ex02 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
