import './App.scss';
// import { motion } from "framer-motion"
// import { Main } from './components/junk';
import MainContainer from './components/MainContainer/MainContainer';


// const list = { hidden: { opacity: 1 } }
// const item = { hidden: { x: 100, opacity: 1 } }

function App() {
  return (
    <div className="App">
      <MainContainer />
      {/* <motion.ul animate="hidden" variants={list}>
        <motion.li variants={item} Item One />
        <motion.li variants={item} Item two />
        <motion.li variants={item} Item three />
      </motion.ul>
      <Main />
      <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
