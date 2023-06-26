import './App.css';
import Header from "./COMPONENT/LAYOUT/Header";
import MainContents from "./COMPONENT/MAIN/MainContents";
import Page from "./PAGES/Page";
import {Route, Routes} from "react-router-dom";
import LogIn from "./PAGES/LogIn";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<MainContents/>} />
            <Route path="/page/*" element={<Page />} />
            <Route path="/login" element={<LogIn/>} />
        </Routes>
    </div>
  );
}

export default App;
