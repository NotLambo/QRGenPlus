import { useEffect } from 'react';
import AOS from 'aos';
import FaqSection from './components/FaqSection.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './components/LandingPage.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import ReviewSection from './components/ReviewSection.jsx';
import WhyUsSection from './components/WhyUsSection.jsx';
import './index.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, [])
  return (
        <main>
          <NavigationBar />
          <LandingPage/>
          <FaqSection/>
          <ReviewSection/>
          <WhyUsSection/>
          <Footer />
        </main>
  );
}

export default App;
