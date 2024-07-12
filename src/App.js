import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useScroll } from "framer-motion";


function App() {
  const [init, setInit] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
      document.getElementById('pageLoader').style.display = 'none';
    }
  });


  return (
    <BrowserRouter>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* BACKGROUND */}
      <Particles
        id="background"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        options={{
          fpsLimit: 120,
          interactivity: {
            // events: {
            //   onClick: {
            //     enable: true,
            //     mode: "push",
            //   },
            //   onHover: {
            //     enable: true,
            //     mode: "repulse",
            //   },
            //   resize: true,
            // },
            // modes: {
            //   push: {
            //     quantity: 4,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 10,
            //   },
            // },
          },
          particles: {
            preset: "fire",
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      <div id="pageLoader" className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-pink-800 animate-ping"></div>
      </div>


      {/* CONTENT */}
      <div id="content" className="">
        <Navbar />

        <Routes>
          <Route exact path="/">
            <Route index element={<Home />} />
          </Route>
          <Route exact path="/contact">
            <Route index element={<Contact />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
