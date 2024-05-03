export const MapLink = ({ latitude, longitude }) => {
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  return (
    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
      Ver en Google Maps
    </a>
  )
}
