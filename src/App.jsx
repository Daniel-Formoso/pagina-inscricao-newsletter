import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Formulario from "./Components/FormsPage";
import ThanksPage from "./Components/ThanksPage";
import Rodape from "./Components/Rodape";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Formulario/>}/>
          <Route path="/ThanksPage/index.jsx" element={<ThanksPage/>}/>
          <Route path="/" element={<Formulario/>}/>
          <Route element={<Rodape/>} />
        </Routes>

        <Rodape/>

      </div>
    </Router>
  );
}

export default App;
