import React from 'react';
import { Image } from './Components/Base';
import { Raised } from './Components/';

function App() {
  return (
    <div className="Screen">
      <Image src="/rectangle@2x.jpg" alt="A bicycle on a street" border={14} />
      <div>
        <Raised amount={1300500.05} mt={153.84} />
      </div>
    </div>
  );
}

export default App;
