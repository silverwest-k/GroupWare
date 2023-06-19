import './App.css';
import Header from "./COMPONENT/LAYOUT/Header";
import MainContents from "./COMPONENT/LAYOUT/MainContents";
import Page from "./COMPONENT/LAYOUT/Page";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path="/" element={<MainContents/>} />
            <Route path="/page" element={<Page/>} />
        </Routes>
    </div>
  );
}

export default App;
