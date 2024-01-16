import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/Header";
import SlideContent from "./components/SlideContent";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      {/* <SlideContent /> */}
      <Cards />
    </>
  );
}

export default App;
