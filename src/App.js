import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"


export const MyComponent = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  />
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }} >
Learn React
    </motion.div>
          
        </a>
      </header>
    </div>
  );
}

export default App;
