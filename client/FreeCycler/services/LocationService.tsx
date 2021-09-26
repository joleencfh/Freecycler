
export const getLonLat = async (address: string): Promise<{lon: number, lat: number}> => {
    const encodedAddress = encodeURI(address);
    let lonLat;
    try {
      lonLat = await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodedAddress}&inputtype=textquery&key=AIzaSyA62tCGwBxLnPqdICzObxVoPdFNYfxBDoQ&fields=geometry`)
        .then((res) => res.json());
      console.log('api call', lonLat.candidates[0].geometry.location);
    } catch (e) {
      console.error(e);
    }
    return lonLat.candidates[0].geometry.location;
  };
  
  // google api response format:
  // {
  //   "candidates": [
  //       {
  //           "geometry": {
  //               "location": {
  //                   "lat": 45.6346308,
  //                   "lng": 9.0504105
  //               },
  //               "viewport": {
  //                   "northeast": {
  //                       "lat": 45.63609037989271,
  //                       "lng": 9.051762479892721
  //                   },
  //                   "southwest": {
  //                       "lat": 45.63339072010727,
  //                       "lng": 9.049062820107277
  //                   }
  //               }
  //           }
  //       }
  //   ],
  //   "status": "OK"
  // }
  