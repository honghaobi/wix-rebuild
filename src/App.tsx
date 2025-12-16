
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Research from './components/Research';
import WhatWeStandFor from './components/WhatWeStandFor';
import BGSInNumbers from './components/BGSInNumbers';
import JoinOurTeam from './components/JoinOurTeam';
import Press from './components/Press';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <Vision />
        <Research />
        <WhatWeStandFor />
        <BGSInNumbers />
        <JoinOurTeam />
        <Press />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
