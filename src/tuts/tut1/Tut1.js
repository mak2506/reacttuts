import './tut1.css';
import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';

function Tut1() {
  return (
    <div className="App" id="bg">
      <div className='layer'>
      <ParallaxProvider>
          <Parallax speed={-80}>
            <div className="slow" id="img1"/>
          </Parallax>
          <Parallax speed={-70}>
           <h1 id="txt">Welcome</h1>
          </Parallax>
          <Parallax speed={50}>
          <div className="fast"  id="img2">
          <h1 id="txt">To</h1>
      </div>
        </Parallax>
        </ParallaxProvider>
      </div>
       <div  className='layer'>
       <ParallaxProvider>
        <Parallax speed={-40}>
          <div className="fast"  id="img3" />
        </Parallax>
        <Parallax speed={-30}>
           <h1 id="txt">Parallx</h1>
          </Parallax>
        <Parallax speed={25}>
          <div className="fast"  id="img4">
           <h1 id="txt">Tutorial 1</h1>
          </div>
        </Parallax>
        </ParallaxProvider>
       </div>
       
    </div>
  );
}

export default Tut1;
