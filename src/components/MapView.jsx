import React, { useState, useCallback } from 'react';
import Map, { Source, Layer, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

// Make sure activeModel is being received as a prop here!
export default function MapView({ selectedCluster, activeModel }) {
  const activeClusterId = parseInt(selectedCluster.replace('C', ''));
  const [hoverInfo, setHoverInfo] = useState(null);

  const clusterColors = {
    0: '#1f77b4',
    1: '#ff7f0e',
    2: '#2ca02c',
    3: '#9467bd',
    4: '#d62728'
  };

// --- LAYER 1: K-MEANS ---
  const kmeansLayer = {
    id: 'kmeans-layer', 
    type: 'fill',
    layout: {
      visibility: activeModel === 'kmeans' ? 'visible' : 'none'
    },
    paint: {
      'fill-color': [
        'match',
        ['get', 'kmeans_cluster'],
        0, clusterColors[0], 1, clusterColors[1], 2, clusterColors[2], 3, clusterColors[3], 4, clusterColors[4],
        '#cccccc'
      ],
      'fill-opacity': [
        'case',
        // Highlight selected cluster
        ['==', ['get', 'kmeans_cluster'], activeClusterId], 0.8, 
        // Dim unselected clusters (so you keep the context)
        0.15 
      ],
      'fill-outline-color': [
        'case',
        // Solid white for selected, faint translucent white for unselected
        ['==', ['get', 'kmeans_cluster'], activeClusterId], '#ffffff',
        'rgba(255,255,255,0.1)'
      ]
    }
  };

  // --- LAYER 2: DBSCAN ---
  const dbscanLayer = {
    id: 'dbscan-layer', 
    type: 'fill',
    layout: {
      visibility: activeModel === 'dbscan' ? 'visible' : 'none'
    },
    paint: {
      'fill-color': [
        'match',
        ['get', 'dbscan_cluster'],
        0, clusterColors[0], 1, clusterColors[1], 2, clusterColors[2], 3, clusterColors[3], 4, clusterColors[4],
        -1, '#b0b0b0',
        '#cccccc'
      ],
      'fill-opacity': [
        'case',
        // Highlight selected hotspot
        ['==', ['get', 'dbscan_cluster'], activeClusterId], 0.9, 
        // Dim unselected hotspots and noise
        0.15 
      ],
      'fill-outline-color': [
        'case',
        ['==', ['get', 'dbscan_cluster'], activeClusterId], '#ffffff',
        'rgba(255,255,255,0.1)'
      ]
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
        initialViewState={{ longitude: -0.1276, latitude: 51.5072, zoom: 9.5 }}
        
        // 1. Lock the panning area to Greater London
        maxBounds={[
          [-0.8, 51.2], 
          [0.5, 51.8]   
        ]}
        minZoom={8.5} 
        
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        
        // 2. THESE ARE THE 3 LINES THAT FIX THE TOOLTIPS!
        interactiveLayerIds={activeModel === 'kmeans' ? ['kmeans-layer'] : ['dbscan-layer']}
        onMouseMove={onHover}
        onMouseLeave={() => setHoverInfo(null)}
      >
        <Source type="geojson" data="/map_data_multi_model.geojson">
          {/* Mount both layers permanently. Mapbox visibility rules will hide the inactive one. */}
          <Layer {...kmeansLayer} />
          <Layer {...dbscanLayer} />
        </Source>

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
                {hoverInfo.properties['LSOA name (2021)']}
              </h4>
              
              {activeModel === 'kmeans' ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <div style={{ color: '#666', fontSize: '11px' }}>Harm / 1000</div>
                    <div style={{ fontWeight: 'bold', color: '#d32f2f' }}>{Math.round(hoverInfo.properties['Harm_per_1000']).toLocaleString()}</div>
                  </div>
                  <div>
                    <div style={{ color: '#666', fontSize: '11px' }}>IMD Score</div>
                    <div style={{ fontWeight: 'bold' }}>{Math.round(hoverInfo.properties['Index of Multiple Deprivation (IMD) Score'])}</div>
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
                    {hoverInfo.properties['allocation_type']}
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