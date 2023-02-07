import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

//css
import "./assets/css/pico.css";
import "./App.css";

function App() {

  return <>
    <body>
      <main className="container">
        <header><Header/></header>
        <main><Home/></main>
        <footer><Footer/></footer>
      </main>
    </body>

  </>
}

export default App;