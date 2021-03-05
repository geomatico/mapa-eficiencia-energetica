import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {BaseMapPicker, Map} from 'geocomponents';
import {connect} from 'react-redux';
import {moveMap} from '../actions';

const mapStyles = [
  {
    label: 'Gris',
    thumbnail: 'mapstyles/gris.png',
    url: 'https://tileserver.geomatico.es/styles/positron/style.json'
  },
  {
    label: 'PNOA',
    thumbnail: 'mapstyles/pnoa.png',
    url: 'mapstyles/pnoa.json'
  }
];

const Mapa = ({viewport, onViewportChange}) => {
  const [selectedStyleUrl, setSelectedStyleUrl] = useState(mapStyles[0].url);
  const [map, setMap] = useState();

  useEffect(() => {
    if(map) {
      const bounds = map.getBounds();
      console.log(bounds);
      // TODO debounce
      const url = `https://analisi.transparenciacatalunya.cat/resource/j6ii-t3w2.json?$where=within_box(georeferencia, ${bounds.getNorth()}, ${bounds.getWest()}, ${bounds.getSouth()}, ${bounds.getEast()})`
      console.log(url);
    }
  }, [viewport, map]);

  const handleViewportChange = ({width, height, latitude, longitude, zoom, bearing, pitch}) =>
    onViewportChange({
      width, height, latitude, longitude, zoom, bearing, pitch
    });

  return <div style={{
    width: '100%',
    position: 'absolute',
    bottom: 0,
    top: 0
  }}>
    <Map
      onMapSet={setMap}
      mapStyle={selectedStyleUrl}
      viewport={viewport}
      onViewportChange={handleViewportChange}
      hash={false}
    />
    <BaseMapPicker
      selectedStyleUrl={selectedStyleUrl}
      onStyleChange={setSelectedStyleUrl}
      styles={mapStyles}
      position='bottom-left'
      direction='up'
    />
  </div>;
};

Mapa.propTypes = {
  viewport: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    bearing: PropTypes.number,
    pitch: PropTypes.number,
  }),
  onViewportChange: PropTypes.func
};

Mapa.defaultProps = {
};

const stateToProps = (state) => ({
  viewport: state.app.map.viewport
});

const actionCreators = {
  onViewportChange: moveMap
};

export default connect(stateToProps, actionCreators)(Mapa);
