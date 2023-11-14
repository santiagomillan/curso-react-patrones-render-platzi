import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// function App(props){
//   return (<h1>{props.saludo}, {props.nombre}</h1>)
// }

// function withWhataver(WrappedComponent){
//   return function ComponenteDeVerdad(props){
//     return (
//       <React.Fragment>
//         <WrappedComponent {...props}></WrappedComponent>
//         <p>Esto es un fragmento</p>
//       </React.Fragment>
//     )
//   }
// }

// const AppWithWhataver = withWhataver(App)

ReactDOM.render(
  // <AppWithWhataver saludo="buenas" nombre="xxx" />,
  <App saludo="buenas" nombre="xxx" />,
  document.getElementById('root')
);
