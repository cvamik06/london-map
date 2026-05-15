import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import MapView from './components/MapView';

function App() {
  // The global state that connects the Dashboard and the Map
  const [selectedCluster, setSelectedCluster] = useState('C1');

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Left Panel: The Map */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ height: '100%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <MapView selectedCluster={selectedCluster} />
        </div>
      </div>

      {/* Right Panel: The Dashboard */}
      <div style={{ width: '800px', padding: '20px', overflowY: 'auto', backgroundColor: '#ffffff', boxShadow: '-4px 0 15px rgba(0,0,0,0.05)' }}>
        <Dashboard 
          selectedCluster={selectedCluster} 
          setSelectedCluster={setSelectedCluster} 
        />
      </div>
    </div>
  );
}

export default App;