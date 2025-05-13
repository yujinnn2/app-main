
import React from 'react';
import WelcomeMessage from './component/message';

const App: React.FC = () => {
  return(
    <div>
      <WelcomeMessage name="유진" />
      <WelcomeMessage name="유진님" />
      <WelcomeMessage name="유진스" />
    </div>
  )
}

export default App;