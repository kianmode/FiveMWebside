import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Rules from './components/Rules';
import JoinSection from './components/JoinSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Rules />
      <JoinSection />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
