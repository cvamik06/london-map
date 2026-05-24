import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import MapView from './components/MapView';

function App() {
  const [selectedCity, setSelectedCity] = useState('London'); // NEW STATE
  const [selectedCluster, setSelectedCluster] = useState('C1');
  const [activeModel, setActiveModel] = useState('kmeans');

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#f5f5f5', fontFamily: 'system-ui, sans-serif' }}>
      
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ height: '100%', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <MapView 
            selectedCity={selectedCity}       
            selectedCluster={selectedCluster} 
            activeModel={activeModel} 
          />
        </div>
      </div>

      <div style={{ width: '800px', padding: '20px', overflowY: 'auto', backgroundColor: '#ffffff', boxShadow: '-4px 0 15px rgba(0,0,0,0.05)' }}>
        <Dashboard 
          selectedCity={selectedCity}         
          setSelectedCity={setSelectedCity}   
          selectedCluster={selectedCluster} 
          setSelectedCluster={setSelectedCluster} 
          activeModel={activeModel}          
          setActiveModel={setActiveModel}    
        />
      </div>
    </div>
  );
}

export default App;