import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { StepDisney } from './components/organism/StepDisney';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StepDisney></StepDisney>
    </>
  );
}

export default App;
