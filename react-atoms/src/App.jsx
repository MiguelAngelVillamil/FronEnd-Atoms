import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage.jsx";
import './App.css';

import SocialMediaIconButton from "./components/SocialMediaIconButtom/SocialMediaIconButton";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route
            path="/SocialMediaIconButton"
            element={<SocialMediaIconButton />}
          />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
