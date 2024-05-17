import { Navigationbar } from "./components/Navigationbar";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import Footer from "./components/Footer";
import CarouselAndCards from './components/CarouselAndCards';


function App() {
  return (
    <>
      <Navigationbar />
      <CarouselAndCards />
      <Footer />
    </>
  );
}

export default App;
