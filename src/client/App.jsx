import React from 'react';
import ModuleList from './components/ModuleList';
import FlowBuilder from './components/FlowBuilder';

function App() {
  return (
    <div className="flex h-screen">
      <ModuleList />
      <FlowBuilder />
    </div>
  );
}

export default App;