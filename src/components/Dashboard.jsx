import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ShieldAlert, Info, AlertTriangle } from 'lucide-react';
import { clusterProfiles } from '../data/clusterData';

export default function Dashboard({ selectedCluster, setSelectedCluster }) {
  // NEW STATE: Tracks if we are viewing Harm or Volume
  const [viewMode, setViewMode] = useState('harm'); 
  
  const activeData = clusterProfiles[selectedCluster];

  const getAlertStyles = (level) => {
    switch(level) {
      case 'low': return { bg: '#e8f5e9', border: '#2e7d32', icon: <Info color="#2e7d32" /> };
      case 'medium': return { bg: '#fff3e0', border: '#f57c00', icon: <AlertTriangle color="#f57c00" /> };
      case 'critical': return { bg: '#ffebee', border: '#b71c1c', icon: <ShieldAlert color="#b71c1c" /> };
      default: return { bg: '#ffebee', border: '#d32f2f', icon: <ShieldAlert color="#d32f2f" /> };
    }
  };

  const alertStyles = getAlertStyles(activeData.alertLevel);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px' }}>
      <h2>Metropolitan Police Analytical Dashboard</h2>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {Object.keys(clusterProfiles).map(key => (
          <button 
            key={key} 
            onClick={() => setSelectedCluster(key)}
            style={{ 
              padding: '8px 16px', 
              backgroundColor: selectedCluster === key ? '#003366' : '#f0f0f0',
              color: selectedCluster === key ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {key} - {clusterProfiles[key].name}
          </button>
        ))}
      </div>

      <div style={{ 
        padding: '15px', 
        backgroundColor: alertStyles.bg,
        borderLeft: `5px solid ${alertStyles.border}`,
        marginBottom: '20px',
        borderRadius: '0 4px 4px 0'
      }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 10px 0' }}>
          {alertStyles.icon} Emerging Risk & Forecast
        </h3>
        <p style={{ margin: 0, lineHeight: '1.5' }}>{activeData.forecast}</p>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* UPDATED: Crime Profile Chart with Toggle */}
        <div style={{ flex: '1 1 400px', height: '350px', backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px' }}>
          
          {/* Header & Toggle Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0' }}>Criminological Profile</h4>
              <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
                Total CCHI Harm per 1000: <strong>{activeData.harmPer1000.toLocaleString()}</strong>
              </p>
            </div>
            
            <div style={{ display: 'flex', backgroundColor: '#e0e0e0', borderRadius: '4px', padding: '2px' }}>
              <button 
                onClick={() => setViewMode('harm')}
                style={{ padding: '4px 8px', border: 'none', borderRadius: '2px', cursor: 'pointer', 
                         backgroundColor: viewMode === 'harm' ? 'white' : 'transparent',
                         fontWeight: viewMode === 'harm' ? 'bold' : 'normal' }}
              >
                Harm %
              </button>
              <button 
                onClick={() => setViewMode('volume')}
                style={{ padding: '4px 8px', border: 'none', borderRadius: '2px', cursor: 'pointer', 
                         backgroundColor: viewMode === 'volume' ? 'white' : 'transparent',
                         fontWeight: viewMode === 'volume' ? 'bold' : 'normal' }}
              >
                Volume %
              </button>
            </div>
          </div>

          <ResponsiveContainer width="100%" height="80%" style={{ marginTop: '15px' }}>
            <BarChart data={activeData.crimes} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" unit="%" domain={[0, 100]} /> {/* Lock axis to 100% so toggling is smooth */}
              <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 11}} />
              <Tooltip />
              
              {/* This Bar dynamically switches between plotting 'harm' and 'volume' */}
              <Bar 
                dataKey={viewMode} 
                fill={viewMode === 'harm' ? "#d32f2f" : "#005b9f"} 
                name={viewMode === 'harm' ? "Harm Contribution" : "Volume Contribution"} 
                animationDuration={500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* IMD Profile Chart */}
        <div style={{ flex: '1 1 300px', height: '350px', backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 5px 0' }}>Socio-Economic Context (IMD)</h4>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Higher score = Higher deprivation</p>
          <ResponsiveContainer width="100%" height="80%" style={{ marginTop: '15px' }}>
            <BarChart data={activeData.imd} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{fontSize: 12}} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4caf50" name="Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}