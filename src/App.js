// import './App.css';
import Navbar from './allparts/Navbar';
import Homepage from './allparts/Homepage';
import SignUp from './allparts/SignUp';
import LogIn from './allparts/LogIn';
import Allrouter from "./allparts/Routes/Allroutes"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      <Allrouter />
    </div>
  );
}

export default App;
