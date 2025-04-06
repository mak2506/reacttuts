import { Link } from "react-router-dom";
import './App.css';

function Home() {
  return (
    <div className="cover">
      <h1>Welcome To React Tutorials</h1>
      <Link to="tut1">Click to view React Tut 1</Link>
      <br></br>
      <Link to="tut2">Click to view React Tut 2</Link>

    </div>
  );
}

export default Home;