// import Btn from './Btn';
import './App.css';

// function App() {
//   return (
//     <Btn />
//     );
// }

// export default App;


// function App() {
//       function thirdExample() {
//           console.log('third example');
//       };
//       return (
//           <div className="thirdExample">
//               <button onClick={thirdExample}>
//                   using a separate function declaration
//               </button>
//           </div>
//       );
//   };
//   export default App;

function App() {
      const fourthExample = () => console.log('fourth example');
  
      return (
          <div className="fourthExample">
              <button onClick={fourthExample}>
                  using a separate function expression
              </button>
          </div>
    );
  };
  export default App;