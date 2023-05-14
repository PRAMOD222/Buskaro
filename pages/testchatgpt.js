import { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 16.344150, lng: 74.373719 },
      zoom: 15,
      styles: [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#7c93a3'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ]
    });
    
    const marker = new google.maps.Marker({
        position: { lat: 16.344150, lng: 74.373719 },
        map: map,
    
      });
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(map);

    

    const request = {
      origin: { lat: 16.344150, lng: 74.373719 },
      destination: { lat: 17.344150, lng: 75.373719 },
      travelMode: 'DRIVING'
    };
    
    directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
    directionsRenderer.setOptions({
        polylineOptions: {
          strokeColor: '#0000FF'
        }
      });

  }, []);
  return <div id="map" style={{ height: '1000px', width: '100%' }} >;
  <script src="https://maps.googleapis.com/maps/api/js?key=    " async/></div>
}

export default Map;
