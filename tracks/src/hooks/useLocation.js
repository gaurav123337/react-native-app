import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default (callback) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
