import Image from './Components/Image';
import Pinfo from './Components/Pinfo';
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Image />
      <div className="content">
        <Pinfo />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
