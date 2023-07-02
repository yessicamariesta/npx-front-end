import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import marker from './marker.svg'
import mapData from './mapData'

const MyMapComponent = () => {
  const MarkerIcon = L.icon({
    iconUrl: marker,
    iconSize: [30, 30],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  })

  return (
    <div id='map'>
      <MapContainer center={[-1.3, 110.888]} zoom={6} scrollWheelZoom={false}>
        {mapData.employee.map((item, index) => {
          return (
            <Marker
              key={index}
              position={[item.geometry[0], item.geometry[1]]}
              icon={MarkerIcon}
            >
              <Tooltip>
                <p className='popup'>
                  <span>Name :</span> {item.name}
                </p>
                <p className='popup'>
                  <span>Location :</span> {item.location}
                </p>
              </Tooltip>
            </Marker>
          )
        })}

        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  )
}

export default MyMapComponent
