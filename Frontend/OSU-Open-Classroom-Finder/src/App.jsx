import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

//css
import "./assets/css/pico.css";
import "./App.css";

function App() {

  return <>
    {/* <header><Header/></header> */}
      <main className="container" style={{minWidth:"600px"}}><Home /></main>
    {/* <footer><Footer/></footer> */}
  </>
}

export default App;