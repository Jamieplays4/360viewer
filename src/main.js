import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';

import '@photo-sphere-viewer/core/index.css';
import './style.css';

const viewer = new Viewer({
  container: document.querySelector('#viewer'),

  panorama: `${import.meta.env.BASE_URL}Panoramic Bugis Taxi Stand Singapore.png`,

  navbar: ['gyroscope'],

  mousemove: true,
  mousewheel: false,

  plugins: [GyroscopePlugin],

  defaultYaw: 0,
  defaultPitch: 0,
  defaultZoomLvl: 0,
});

const gyroscope = viewer.getPlugin(GyroscopePlugin);

async function enableGyroscope() {
  try {
    if (await gyroscope.isSupported()) {
      await gyroscope.start();
    }
  } catch (error) {
    console.info(
      'Gyroscope could not start automatically. Tap the gyroscope button to enable it.',
      error,
    );
  }
}

enableGyroscope();