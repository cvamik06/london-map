import React, { useMemo, useState, useCallback } from 'react';
import Map, { Source, Layer, Popup } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

// Ensure you replace this with your actual Mapbox token
const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN; 

export default function MapView({ selectedCluster }) {
  const activeClusterId = parseInt(selectedCluster.replace('C', ''));
  
  // NEW STATE: Track the hovered neighborhood
  const [hoverInfo, setHoverInfo] = useState(null);

  const clusterColors = {
    0: '#1f77b4',
    1: '#ff7f0e',
    2: '#2ca02c',
    3: '#9467bd',
    4: '#d62728'
  };

  const dataLayer = useMemo(() => ({
    id: 'lsoa-clusters',
    type: 'fill',
    paint: {
      'fill-color': [
        'match',
        ['get', 'cluster'],
        0, clusterColors[0],
        1, clusterColors[1],
        2, clusterColors[2],
        3, clusterColors[3],
        4, clusterColors[4],
        '#cccccc'
      ],
      'fill-opacity': [
        'case',
        ['==', ['get', 'cluster'], activeClusterId],
        0.8, 
        0.2  
      ],
      'fill-outline-color': '#ffffff'
    }
  }), [activeClusterId]);

  // NEW FUNCTION: Handle the mouse hover event
  const onHover = useCallback(event => {
    const {
      features,
      lngLat: { lng, lat }
    } = event;
    const hoveredFeature = features && features[0];

    if (hoveredFeature) {
      setHoverInfo({
        longitude: lng,
        latitude: lat,
        properties: hoveredFeature.properties
      });
    } else {
      setHoverInfo(null);
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
      <Map
        initialViewState={{
          longitude: -0.1276,
          latitude: 51.5072,
          zoom: 9.5
        }}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={['lsoa-clusters']} // Tells Mapbox which layer to track for hover events
        onMouseMove={onHover}
        onMouseLeave={() => setHoverInfo(null)}
      >
        <Source type="geojson" data="/map_data_clustered.geojson">
          <Layer {...dataLayer} />
        </Source>

        {/* NEW: The Tooltip Popup */}
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
            <div style={{ padding: '10px', fontFamily: 'system-ui, sans-serif', fontSize: '13px' }}>
              <h4 style={{ margin: '0 0 8px 0', borderBottom: '1px solid #eee', paddingBottom: '4px' }}>
                {hoverInfo.properties['LSOA name (2021)']}
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div>
                  <div style={{ color: '#666', fontSize: '11px' }}>Harm / 1000</div>
                  <div style={{ fontWeight: 'bold', color: '#d32f2f' }}>
                    {Math.round(hoverInfo.properties['Harm_per_1000']).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div style={{ color: '#666', fontSize: '11px' }}>IMD Score</div>
                  <div style={{ fontWeight: 'bold' }}>
                    {Math.round(hoverInfo.properties['Index of Multiple Deprivation (IMD) Score'])}
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}