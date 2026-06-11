import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ShieldAlert, Info, HelpCircle, X } from 'lucide-react';

import clusterProfiles from '../data/cluster_summary_all_cities_with_imd.json';

// --- Sentence templates for different scenarios ---
const forecastTemplates = {
  increase: [
    "⚠️ CITY-WIDE ESCALATION: Predictive models indicate a {pct}% surge in {crime} across the jurisdiction next month. Evaluate zone vulnerabilities.",
    "⚠️ THREAT ELEVATED: Advanced forecasting detects a {pct}% upward trend in city-wide {crime}. Strategic resource reallocation advised.",
    "⚠️ TACTICAL ALERT: Anticipated {pct}% increase in {crime} incidents for the upcoming operational period. Command attention required."
  ],
  decrease: [
    "📉 THREAT DE-ESCALATION: Models predict a {pct}% reduction in {crime} across the jurisdiction. Current operational strategies are effective.",
    "📉 POSITIVE TREND: Anticipated {pct}% drop in city-wide {crime} incidents for the upcoming operational period.",
    "📉 RISK REDUCTION: Advanced forecasting shows a {pct}% decrease in {crime}. Monitor sectors for sustained improvement."
  ],
  stable: [
    "✅ FORECAST STABLE: Models indicate no severe escalations (>3%) across the jurisdiction for the upcoming operational period.",
    "✅ BASELINE NOMINAL: Primary crime indicators remain within standard operational thresholds. Maintain standard deployment.",
    "✅ THREAT NEUTRAL: No significant city-wide spikes predicted. Continue current sector patrol protocols."
  ]
};

export default function Dashboard({ selectedCity, setSelectedCity, selectedCluster, setSelectedCluster, activeModel, setActiveModel }) {
  const [viewMode, setViewMode] = useState('harm'); 
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [cityForecasts, setCityForecasts] = useState(null);

  useEffect(() => {
    fetch('/forecast_data.json')
      .then(res => res.json())
      .then(data => setCityForecasts(data))
      .catch(err => console.error("Could not load forecasts:", err));
  }, []);

  const cityData = clusterProfiles[selectedCity] || clusterProfiles["Birmingham"];
  //Reset active cluster when city or model changes
  useEffect(() => {
    setSelectedCluster('C0');
  }, [selectedCity, activeModel, setSelectedCluster]);

  const activeModelData = cityData?.[activeModel] || {};
  const activeClusterData = activeModelData[selectedCluster] || activeModelData['C0'];

  if (!activeClusterData) {
    return <div style={{ padding: '20px' }}>Loading city data...</div>;
  }

  //uses cluster names to determine danger levels
  const getCalculatedLevel = (cluster) => {
    if (!cluster) return 'low';
    const name = (cluster.name || "").toLowerCase();

    if (name.includes('critical') || name.includes('severe') || name.includes('high')) return 'critical';
    if (name.includes('moderate') || name.includes('medium') || name.includes('elevated')) return 'medium';
    if (name.includes('low') || name.includes('stable')) return 'low';
    
    return cluster.alertLevel || 'low';
  };

  // --- Randomized forecast text based on severity  ---
  const dynamicForecastText = useMemo(() => {
    // Separate Manchester
    if (selectedCity === "Manchester") {
      return "ℹ️ SYSTEM NOTICE: Forecasting for Manchester is unavailable as the official dataset provided contains missing information for the city.";
    }

    
    if (!cityForecasts || !cityForecasts[selectedCity]) return "Loading predictive models...";

    const forecasts = cityForecasts[selectedCity];
    const maxIncrease = forecasts[0]; // Top of the list (highest positive number)
    const maxDecrease = forecasts[forecasts.length - 1]; // Bottom of the list (lowest negative number)

    let type = 'stable';
    let targetCrime = null;

    // Check if we have a major spike first
    if (maxIncrease && maxIncrease.Pct_Change >= 3.0) {
      type = 'increase';
      targetCrime = maxIncrease;
    } 
    // If no spike, check if we have a major drop
    else if (maxDecrease && maxDecrease.Pct_Change <= -3.0) {
      type = 'decrease';
      targetCrime = maxDecrease;
    }

    // Pick a random sentence from the correct pool
    const pool = forecastTemplates[type];
    const randomIdx = Math.floor(Math.random() * pool.length);
    let text = pool[randomIdx];

    // Swap out the placeholder words for the actual math
    if (targetCrime) {
      const crimeName = targetCrime["Major Category"].toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
      text = text.replace('{pct}', Math.abs(targetCrime.Pct_Change)).replace('{crime}', crimeName);
    }

    return text;
  }, [selectedCity, cityForecasts]); // only re-runs when the city or data changes


  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px' }}>
      
      {/* ---------------- HEADER & ACTION BUTTONS ---------------- */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>UK Police Analytical Dashboard</h2>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setShowAbout(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '4px', cursor: 'pointer', color: '#495057', fontWeight: 'bold' }}>
            <Info size={18} /> About
          </button>
          <button onClick={() => setShowHelp(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '4px', cursor: 'pointer', color: '#495057', fontWeight: 'bold' }}>
            <HelpCircle size={18} /> Guide
          </button>
        </div>
      </div>

      {/* ---------------- CITY SELECTOR DROPDOWN ---------------- */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <strong style={{ color: '#495057' }}>Select Jurisdiction:</strong>
        <select 
          value={selectedCity} 
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#f8f9fa' }}
        >
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
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {Object.keys(activeModelData).map(key => {
          const isSelected = selectedCluster === key;
          const level = getCalculatedLevel(activeModelData[key]); 

          let baseColor;
          if (level === 'low') baseColor = '#0F766E'; 
          else if (level === 'medium') baseColor = '#B45309'; 
          else baseColor = '#9F1239'; 

          return (
            <button 
              key={key} 
              onClick={() => setSelectedCluster(key)}
              style={{ 
                padding: '10px 18px', 
                backgroundColor: baseColor, 
                color: '#ffffff',           
                border: isSelected ? '2px solid #212529' : '2px solid transparent', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                boxShadow: isSelected ? '0 4px 8px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)',
                opacity: isSelected ? 1 : 0.65,
                transform: isSelected ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = isSelected ? 1 : 0.65;
                e.currentTarget.style.transform = isSelected ? 'scale(1.02)' : 'scale(1)';
              }}
            >
              {key} - {activeModelData[key].name}
            </button>
          );
        })}
      </div>

      {/* --- CONSISTENT CITY-WIDE FORECAST PANEL --- */}
      <div style={{ padding: '15px', backgroundColor: '#f4f6f8', borderLeft: `5px solid #475569`, marginBottom: '20px', borderRadius: '0 4px 4px 0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 10px 0', color: '#334155' }}>
          <Info color="#475569" size={20} /> City-Wide Predictive Forecast
        </h3>
        <p style={{ margin: 0, lineHeight: '1.5', fontWeight: '500', color: '#1e293b' }}>{dynamicForecastText}</p>
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

      {/* ---------------- THE HELP MODAL OVERLAY ---------------- */}
      {showHelp && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '600px', backgroundColor: '#ffffff', borderRadius: '8px', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', position: 'relative', maxHeight: '80vh', overflowY: 'auto' }}>
            
            <button onClick={() => setShowHelp(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}>
              <X size={24} />
            </button>

            <h2 style={{ marginTop: 0, color: '#1a1a1a', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Quick Start Guide</h2>
            
            <h4 style={{ color: '#0F766E', marginBottom: '5px' }}>1. The Map & Search</h4>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
              The interactive map allows you to view the exact boundaries of every deployment zone. Hover over any neighborhood to see its specific Harm Score and Deprivation (IMD) rating. Use the <strong>Search Bar</strong> in the top left to instantly jump to a specific neighborhood.
            </p>

            <h4 style={{ color: '#0F766E', marginBottom: '5px' }}>2. Clustering Algorithms</h4>
            <ul style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.6', color: '#444', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}><strong>Balanced (K-Means):</strong> Groups neighborhoods based on their overall socio-economic and criminological profile. Use this for long-term strategic planning and understanding neighborhood archetypes.</li>
              <li><strong>Hotspots (DBSCAN):</strong> Isolates hyper-dense areas of severe activity, ignoring background "noise." Use this for immediate, targeted tactical deployments and taskforce routing.</li>
            </ul>

            <h4 style={{ color: '#0F766E', marginBottom: '5px' }}>3. Threat Levels</h4>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
              Deployment zones are color-coded based on severity: 
              <span style={{ color: '#0F766E', fontWeight: 'bold' }}> Teal (Low)</span> indicates stable environments, 
              <span style={{ color: '#B45309', fontWeight: 'bold' }}> Amber (Moderate)</span> requires elevated patrol visibility, and 
              <span style={{ color: '#9F1239', fontWeight: 'bold' }}> Crimson (Critical)</span> indicates severe risk requiring multi-agency intervention.
            </p>

            <h4 style={{ color: '#0F766E', marginBottom: '5px' }}>4. Chart Analysis</h4>
            <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
              The bottom charts break down the specific crime types driving the threat level for the selected cluster. Toggle between <strong>Harm %</strong> (the severity/cost of the crimes) and <strong>Volume %</strong> (the sheer number of incidents) to better allocate specific resources.
            </p>

          </div>
        </div>
      )}
      {/* ---------------- THE ABOUT MODAL OVERLAY ---------------- */}
      {showAbout && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '500px', backgroundColor: '#ffffff', borderRadius: '8px', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', position: 'relative' }}>
            
            <button onClick={() => setShowAbout(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}>
              <X size={24} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <ShieldAlert size={48} color="#0F766E" style={{ marginBottom: '10px' }} />
              <h2 style={{ margin: 0, color: '#1a1a1a' }}>System Information</h2>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>4CBLW020 — Group 4</p>
            </div>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '6px', border: '1px solid #eee', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>Project Overview</h4>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#555' }}>
                This web-based dashboard was developed as a final project by Sander Simson, Cem Vamik, Manan Goel, Hugo Kandjee Romero, Mark van Riet, and Bogdan Spătaru. 
                <br/><br/>
                The project explores how the volume and harm of crimes, combined with neighborhood deprivation data (IMD), can be used to better allocate police resources. By categorizing urban centers into distinct archetypes using K-Means and DBSCAN clustering algorithms, the tool aims to support data-driven policing rather than relying strictly on standard district boundaries.
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>Data Integration Sources</h4>
              <ul style={{ margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#555', paddingLeft: '20px' }}>
                <li><strong>Geospatial Data:</strong> UK Office for National Statistics (ONS) LSOA Boundaries (2021).</li>
                <li><strong>Criminology Data:</strong> Police.uk Street Level Crime & Cambridge Crime Harm Index.</li>
                <li><strong>Socio-Economic Data:</strong> English Indices of Deprivation.</li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                <strong>Academic Disclaimer:</strong><br/>
                This tool is an academic prototype designed to support human decision-making, not replace police judgment. 
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}