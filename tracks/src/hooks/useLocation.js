import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  // useEffect(() => {
  //   const startWatching = async () => {
  //     try {
  //       const { granted } = await Location.requestForegroundPermissionsAsync();
  //       if (!granted) {
  //         throw new Error('Location permission not granted');
  //       }
  //       const sub = await Location.watchPositionAsync(
  //         {
  //           accuracy: Location.Accuracy.BestForNavigation,
  //           timeInterval: 1000,
  //           distanceInterval: 10,
  //         },
  //         callback,
  //       );
  //       setSubscriber(sub);
  //     } catch (e) {
  //       setErr(e);
  //     }
  //   };
  //   if (shouldTrack) {
  //     startWatching();
  //   } else {
  //     subscriber.remove();
  //     setSubscriber(null);
  //   }
  //   return () => {
  //     if (subscriber) {
  //       subscriber.remove();
  //     }
  //   };
  // }, [shouldTrack, callback]);

  useEffect(
    function () {
      let subscriber;
      let startWatching = async () => {
        try {
          const { granted } =
            await Location.requestForegroundPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          subscriber = await Location.watchPositionAsync(
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
      if (shouldTrack) {
        startWatching();
      } else {
        if (subscriber) {
          subscriber.remove();
        }
        subscriber = null;
      }
      return () => {
        if (subscriber) {
          subscriber.remove();
        }
      };
    },
    [shouldTrack, callback],
  );

  return [err];
};
