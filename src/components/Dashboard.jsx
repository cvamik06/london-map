import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ShieldAlert, Info, AlertTriangle } from 'lucide-react';
import { clusterProfiles } from '../data/clusterData';

export default function Dashboard({ selectedCluster, setSelectedCluster, activeModel, setActiveModel }) {
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

  const alertStyles = getAlertStyles(activeData?.alertLevel);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px' }}>
      <h2>Metropolitan Police Analytical Dashboard</h2>
      
      {/* ---------------- THE MODEL TOGGLE ---------------- */}
      <div style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <strong style={{ color: '#495057' }}>Clustering Algorithm:</strong>
        <div style={{ display: 'flex', backgroundColor: '#e9ecef', borderRadius: '6px', padding: '4px' }}>
          <button 
            onClick={() => setActiveModel('kmeans')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', backgroundColor: activeModel === 'kmeans' ? '#ffffff' : 'transparent', fontWeight: activeModel === 'kmeans' ? 'bold' : 'normal', boxShadow: activeModel === 'kmeans' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
          >
            K-Means (Balanced)
          </button>
          <button 
            onClick={() => setActiveModel('dbscan')}
            style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: '0.2s', backgroundColor: activeModel === 'dbscan' ? '#ffffff' : 'transparent', fontWeight: activeModel === 'dbscan' ? 'bold' : 'normal', boxShadow: activeModel === 'dbscan' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}
          >
            DBSCAN (Hotspots)
          </button>
        </div>
      </div>

      {/* ---------------- CONDITIONAL UI RENDER ---------------- */}
      {activeModel === 'kmeans' ? (
        <>
          {/* ----- K-MEANS VIEW (Charts & Clusters) ----- */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {Object.keys(clusterProfiles).map(key => (
              <button 
                key={key} 
                onClick={() => setSelectedCluster(key)}
                style={{ padding: '8px 16px', backgroundColor: selectedCluster === key ? '#003366' : '#f0f0f0', color: selectedCluster === key ? 'white' : '#333', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                {key} - {clusterProfiles[key].name}
              </button>
            ))}
          </div>

          <div style={{ padding: '15px', backgroundColor: alertStyles.bg, borderLeft: `5px solid ${alertStyles.border}`, marginBottom: '20px', borderRadius: '0 4px 4px 0' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 10px 0' }}>
              {alertStyles.icon} Emerging Risk & Forecast
            </h3>
            <p style={{ margin: 0, lineHeight: '1.5' }}>{activeData.forecast}</p>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px', height: '350px', backgroundColor: '#fafafa', padding: '15px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px 0' }}>Criminological Profile</h4>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Total CCHI Harm per 1000: <strong>{activeData.harmPer1000.toLocaleString()}</strong></p>
                </div>
                <div style={{ display: 'flex', backgroundColor: '#e0e0e0', borderRadius: '4px', padding: '2px' }}>
                  <button onClick={() => setViewMode('harm')} style={{ padding: '4px 8px', border: 'none', borderRadius: '2px', cursor: 'pointer', backgroundColor: viewMode === 'harm' ? 'white' : 'transparent', fontWeight: viewMode === 'harm' ? 'bold' : 'normal' }}>Harm %</button>
                  <button onClick={() => setViewMode('volume')} style={{ padding: '4px 8px', border: 'none', borderRadius: '2px', cursor: 'pointer', backgroundColor: viewMode === 'volume' ? 'white' : 'transparent', fontWeight: viewMode === 'volume' ? 'bold' : 'normal' }}>Volume %</button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="80%" style={{ marginTop: '15px' }}>
                <BarChart data={activeData.crimes} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
        </>
      ) : (
        /* ----- DBSCAN VIEW (Summary) ----- */
<div style={{ padding: '20px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
            <ShieldAlert size={48} color="#d32f2f" />
            <div>
              <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>DBSCAN Density Deployment</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.5' }}>
                The algorithm filtered out the statistical "noise" and isolated 1,015 high-priority areas into 4 distinct, hyper-dense Taskforce Zones.
              </p>
            </div>
          </div>

          {/* The 4 Specialist Taskforce Zones (Now Clickable!) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {[
              { id: 'C0', name: 'Primary Core', count: 985, color: '#1f77b4' },
              { id: 'C1', name: 'Micro-Cluster', count: 8, color: '#ff7f0e' },
              { id: 'C2', name: 'Micro-Cluster', count: 14, color: '#2ca02c' },
              { id: 'C3', name: 'Micro-Cluster', count: 8, color: '#9467bd' }
            ].map((zone) => (
              <div 
                key={zone.id}
                onClick={() => setSelectedCluster(zone.id)}
                style={{ 
                  padding: '15px', 
                  backgroundColor: 'white', 
                  borderRadius: '6px', 
                  borderLeft: `6px solid ${zone.color}`, 
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  // Highlight the selected zone, dim the unselected ones
                  boxShadow: selectedCluster === zone.id ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.05)',
                  opacity: selectedCluster === zone.id ? 1 : 0.5,
                  transform: selectedCluster === zone.id ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <strong style={{ display: 'block', fontSize: '15px', marginBottom: '5px', color: '#333' }}>
                  Zone {zone.id.replace('C', '')}: {zone.name}
                </strong>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: zone.color }}>{zone.count}</span>
                <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>Neighborhoods</span>
              </div>
            ))}
          </div>

          {/* The General Allocation (Noise) Zone */}
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e0e0e0', borderRadius: '6px', borderLeft: '6px solid #2b2b2b' }}>
            <strong style={{ display: 'block', fontSize: '15px', marginBottom: '5px', color: '#333' }}>General Borough-led Allocation (Noise)</strong>
            <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>3,973</span>
            <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>Neighborhoods assigned to standard patrol</span>
          </div>

        </div>
      )}
    </div>
  );
}