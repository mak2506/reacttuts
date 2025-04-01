import './App.css';
import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App" id="bg">
        <ParallaxProvider>
          <Parallax speed={-70}>
            <div className="slow" id="img1"/>
          </Parallax>
          <Parallax speed={-80}>
           <h1 id="txt">Welcome</h1>
          </Parallax>
          
          <Parallax speed={25}>
          <div className="fast"  id="img2" />
        </Parallax>
        </ParallaxProvider>
    </div>
  );
}

export default App;
