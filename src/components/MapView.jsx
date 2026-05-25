import React, { useState, useEffect, useCallback } from 'react';
import Map, { Source, Layer, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { cityConfigs } from '../data/cityConfig'; 

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapView({ selectedCity, selectedCluster, activeModel }) {
  const activeClusterId = parseInt(selectedCluster.replace('C', ''));
  const [hoverInfo, setHoverInfo] = useState(null);
  
  const [mapData, setMapData] = useState(null);
  const cityData = cityConfigs[selectedCity] || cityConfigs["London"];

  useEffect(() => {
    Promise.all([
      fetch('/LSOA_Boundaries.geojson').then(res => res.json()), 
      fetch('/cluster_data.json').then(res => res.json())        
    ])
    .then(([geojsonData, clusterData]) => {
      geojsonData.features = geojsonData.features.map(feature => {
        const lsoaCode = feature.properties.LSOA21CD; 
        
        // FIX: Removed the default 0 so empty areas stay empty!
        const stats = clusterData[lsoaCode] || { kmeans_cluster: null, dbscan_cluster: null, City_Group: 'None' };
        
        return {
          ...feature,
          properties: {
            ...feature.properties,
            ...stats 
          }
        };
      });

      setMapData(geojsonData);
    })
    .catch(err => console.error("Error loading map data:", err));
  }, []);

  const clusterColors = {
    0: '#1f77b4', 1: '#ff7f0e', 2: '#2ca02c', 3: '#9467bd', 4: '#d62728'
  };

  const kmeansLayer = {
    id: 'kmeans-layer', 
    type: 'fill',
    // NEW: Only render polygons that belong to the selected city!
    filter: ['==', ['get', 'City_Group'], selectedCity],
    layout: { visibility: activeModel === 'kmeans' ? 'visible' : 'none' },
    paint: {
      'fill-color': ['match', ['get', 'kmeans_cluster'], 0, clusterColors[0], 1, clusterColors[1], 2, clusterColors[2], 3, clusterColors[3], 4, clusterColors[4], '#cccccc'],
      'fill-opacity': ['case', ['==', ['get', 'kmeans_cluster'], activeClusterId], 0.8, 0.15],
      'fill-outline-color': ['case', ['==', ['get', 'kmeans_cluster'], activeClusterId], '#ffffff', 'rgba(255,255,255,0.1)']
    }
  };

  const dbscanLayer = {
    id: 'dbscan-layer', 
    type: 'fill',
    // NEW: Only render polygons that belong to the selected city!
    filter: ['==', ['get', 'City_Group'], selectedCity],
    layout: { visibility: activeModel === 'dbscan' ? 'visible' : 'none' },
    paint: {
      'fill-color': ['match', ['get', 'dbscan_cluster'], 0, clusterColors[0], 1, clusterColors[1], 2, clusterColors[2], 3, clusterColors[3], 4, clusterColors[4], -1, '#b0b0b0', '#cccccc'],
      'fill-opacity': ['case', ['==', ['get', 'dbscan_cluster'], activeClusterId], 0.9, 0.15],
      'fill-outline-color': ['case', ['==', ['get', 'dbscan_cluster'], activeClusterId], '#ffffff', 'rgba(255,255,255,0.1)']
    }
  };

  const onHover = useCallback(event => {
    const { features, lngLat: { lng, lat } } = event;
    const hoveredFeature = features && features[0];
    if (hoveredFeature) {
      setHoverInfo({ longitude: lng, latitude: lat, properties: hoveredFeature.properties });
    } else {
      setHoverInfo(null);
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#e5e5e5' }}>
      <Map
        key={selectedCity} 
        initialViewState={cityData.center} 
        maxBounds={[ [-11.0, 49.5], [3.0, 61.0] ]}
        minZoom={5}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={activeModel === 'kmeans' ? ['kmeans-layer'] : ['dbscan-layer']}
        onMouseMove={onHover}
        onMouseLeave={() => setHoverInfo(null)}
      >
        {mapData && (
          <Source type="geojson" data={mapData}>
            <Layer {...kmeansLayer} />
            <Layer {...dbscanLayer} />
          </Source>
        )}

        {hoverInfo && (
          <Popup
            longitude={hoverInfo.longitude}
            latitude={hoverInfo.latitude}
            closeButton={false}
            closeOnClick={false}
            anchor="bottom"
            offset={15}
            style={{ padding: '0', zIndex: 10 }}
          >
            <div style={{ padding: '10px', fontFamily: 'system-ui, sans-serif', fontSize: '13px', width: '200px' }}>
              <h4 style={{ margin: '0 0 8px 0', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
                {hoverInfo.properties['LSOA name (2021)'] || hoverInfo.properties['LSOA Name'] || "Unknown Neighborhood"}
              </h4>
              
              {activeModel === 'kmeans' ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <div style={{ color: '#666', fontSize: '11px' }}>Harm / 1000</div>
                    <div style={{ fontWeight: 'bold', color: '#d32f2f' }}>{Math.round(hoverInfo.properties['Harm_per_1000'] || 0).toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ color: '#666', fontSize: '11px' }}>IMD Score</div>
                    <div style={{ fontWeight: 'bold' }}>{Math.round(hoverInfo.properties['Index of Multiple Deprivation (IMD) Score'] || 0)}</div>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ color: '#666', fontSize: '11px', marginBottom: '4px' }}>Deployment Strategy</div>
                  <div style={{ 
                    fontWeight: 'bold', 
                    color: hoverInfo.properties['dbscan_cluster'] === -1 ? '#666' : '#d32f2f',
                    backgroundColor: hoverInfo.properties['dbscan_cluster'] === -1 ? '#f5f5f5' : '#ffebee',
                    padding: '4px 8px',
                    borderRadius: '4px'
                  }}>
                    {hoverInfo.properties['dbscan_cluster'] === -1 ? 'Standard Patrol' : 'Targeted Taskforce'}
                  </div>
                </div>
              )}
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}