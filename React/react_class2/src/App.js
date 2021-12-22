import logo from './logo.svg';
import './App.css';
import InputExam from './InputExam';
import { CalData } from './CalcResult';
import Calculator from './Calculator';
import UserList from './UserList';
import UserManage from './UserManage';
import Box from './Box';
import Reactcss from './Reactcss';

// 기존

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    <div>
      <Reactcss />
    </div>
    </>
  );
}

export default App;
