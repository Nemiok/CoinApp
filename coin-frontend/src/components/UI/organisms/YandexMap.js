import React, { useEffect, useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import accountServices from '../../../services/accountServices';

const YandexMap = () => {

  const [locations, setLocations] = useState([
    { lat: 44.878414, lon: 39.190289 },
    { lat: 44.6098268, lon: 40.1006606 },
  ])

  useEffect(() => {
    accountServices.getBanksGeoLocations()
      .then(receivedLocations => {
        setLocations(receivedLocations)
      })
  }, [])

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 10,
  };

  return (
    <YMaps>
      <Map style={{ width: '100%', height: '100vh' }} defaultState={defaultState}>
        {locations.map(location => (
          <Placemark key={location.lon + location.lon} geometry={[location.lat, location.lon]} />
        ))}
      </Map>
    </YMaps>
  );
}

export default YandexMap