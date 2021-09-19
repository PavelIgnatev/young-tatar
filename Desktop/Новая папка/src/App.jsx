import React from 'react';
import { BaseFooter } from './components/BaseFooter/BaseFooter';
import { BaseHeader } from './components/BaseHeader/BaseHeader';
import { RouterPages } from './pages';

function App() {
  return (
    <div className="App">
      <BaseHeader />
      <RouterPages />
      <BaseFooter />
    </div>
  );
}

export default App;
