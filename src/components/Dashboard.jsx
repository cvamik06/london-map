import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ShieldAlert, Info, AlertTriangle } from 'lucide-react';

import clusterProfiles from '../data/cluster_summary_all_cities_with_imd.json';
import { cityConfigs } from '../data/cityConfig';

export default function Dashboard({ selectedCity, setSelectedCity, selectedCluster, setSelectedCluster, activeModel, setActiveModel }) {
  const [viewMode, setViewMode] = useState('harm'); 
  
  // 1. DYNAMIC DATA ROUTING: Safely extract data for the chosen city
  const cityData = clusterProfiles[selectedCity] || clusterProfiles["Birmingham"];
  
  // 2. SAFETY RESET: If the user changes city or algorithm, jump back to Cluster C0
  useEffect(() => {
    setSelectedCluster('C0');
  }, [selectedCity, activeModel, setSelectedCluster]);

  // 3. Extract the active data for the UI based on the toggle and cluster selection
  const activeModelData = cityData?.[activeModel] || {};
  const activeClusterData = activeModelData[selectedCluster] || activeModelData['C0'];

  const getAlertStyles = (level) => {
    switch(level) {
      case 'low': return { bg: '#e8f5e9', border: '#2e7d32', icon: <Info color="#2e7d32" /> };
      case 'medium': return { bg: '#fff3e0', border: '#f57c00', icon: <AlertTriangle color="#f57c00" /> };
      case 'critical': return { bg: '#ffebee', border: '#b71c1c', icon: <ShieldAlert color="#b71c1c" /> };
      default: return { bg: '#ffebee', border: '#d32f2f', icon: <ShieldAlert color="#d32f2f" /> };
    }
  };

  // Fallback loading state if data hasn't generated yet
  if (!activeClusterData) {
    return <div style={{ padding: '20px' }}>Loading city data...</div>;
  }

  const alertStyles = getAlertStyles(activeClusterData.alertLevel);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px' }}>
      <h2>Police Analytical Dashboard</h2>
      
      {/* ---------------- CITY SELECTOR DROPDOWN ---------------- */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <strong style={{ color: '#495057' }}>Select Jurisdiction:</strong>
        <select 
          value={selectedCity} 
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#f8f9fa' }}
        >
          {/* Dynamically list cities based on the JSON keys */}
          {Object.keys(clusterProfiles).map(city => (
            <option key={city} value={city}>{city} </option>
          ))}
        </select>
      </div>

      {/* ---------------- THE MODEL TOGGLE ---------------- */}
      <div style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <strong style={{ color: '#495057' }}>Clustering Type:</strong>
        <div style={{ display: 'flex', backgroundColor: '#e9ecef', borderRadius: '6px', padding: '4px' }}>
          <button 
            onClick={() => setActiveModel('kmeans')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', backgroundColor: activeModel === 'kmeans' ? '#ffffff' : 'transparent', fontWeight: activeModel === 'kmeans' ? 'bold' : 'normal', boxShadow: activeModel === 'kmeans' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
          >
            Balanced
          </button>
          <button 
            onClick={() => setActiveModel('dbscan')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', backgroundColor: activeModel === 'dbscan' ? '#ffffff' : 'transparent', fontWeight: activeModel === 'dbscan' ? 'bold' : 'normal', boxShadow: activeModel === 'dbscan' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
          >
           Hotspots
          </button>
        </div>
      </div>

      {/* ---------------- UNIFIED CHART RENDER ---------------- */}
      {/* Dynamic Cluster Buttons based on what the active model contains */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {Object.keys(activeModelData).map(key => (
          <button 
            key={key} 
            onClick={() => setSelectedCluster(key)}
            style={{ padding: '8px 16px', backgroundColor: selectedCluster === key ? '#003366' : '#f0f0f0', color: selectedCluster === key ? 'white' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {key} - {activeModelData[key].name}
          </button>
        ))}
      </div>

      <div style={{ padding: '15px', backgroundColor: alertStyles.bg, borderLeft: `5px solid ${alertStyles.border}`, marginBottom: '20px', borderRadius: '0 4px 4px 0' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 10px 0' }}>
          {alertStyles.icon} Emerging Risk & Forecast
        </h3>
        {/* Added a fallback string just in case the JSON 'forecast' is empty */}
        <p style={{ margin: 0, lineHeight: '1.5' }}>{activeClusterData.forecast || "Awaiting advanced analytical forecast for this sector."}</p>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 400px', height: '350px', backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0' }}>Criminological Profile</h4>
              <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Total CCHI Harm per 1000: <strong>{activeClusterData.harmPer1000.toLocaleString()}</strong></p>
            </div>
            <div style={{ display: 'flex', backgroundColor: '#e0e0e0', borderRadius: '4px', padding: '2px' }}>
              <button onClick={() => setViewMode('harm')} style={{ padding: '4px 8px', border: 'none', borderRadius: '2px', cursor: 'pointer', backgroundColor: viewMode === 'harm' ? 'white' : 'transparent', fontWeight: viewMode === 'harm' ? 'bold' : 'normal' }}>Harm %</button>
              <button onClick={() => setViewMode('volume')} style={{ padding: '4px 8px', border: 'none', borderRadius: '2px', cursor: 'pointer', backgroundColor: viewMode === 'volume' ? 'white' : 'transparent', fontWeight: viewMode === 'volume' ? 'bold' : 'normal' }}>Volume %</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%" style={{ marginTop: '15px' }}>
            <BarChart data={activeClusterData.crimes} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" unit="%" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 11}} />
              <Tooltip />
              <Bar dataKey={viewMode} fill={viewMode === 'harm' ? "#d32f2f" : "#005b9f"} name={viewMode === 'harm' ? "Harm Contribution" : "Volume Contribution"} animationDuration={500} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: '1 1 300px', height: '350px', backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px' }}>
          <h4 style={{ margin: '0 0 5px 0' }}>Socio-Economic Context (IMD)</h4>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Higher score = Higher deprivation</p>
          <ResponsiveContainer width="100%" height="80%" style={{ marginTop: '15px' }}>
            <BarChart data={activeClusterData.imd} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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