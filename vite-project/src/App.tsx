
// import React from 'react';
// import WelcomeMessage from './component/message';

// const App: React.FC = () => {
//   return(
//     <div>
//       <WelcomeMessage name="유진" />
//       <WelcomeMessage name="유진님" />
//       <WelcomeMessage name="유진스" />
//     </div>
//   )
// }

// export default App;


import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from './component/page/home';
import About from "./component/page/About";

const App: React.FC=() =>{

  return(

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  )
}

export default App;