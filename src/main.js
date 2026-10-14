import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';

import '@photo-sphere-viewer/core/index.css';
import './style.css';

const viewer = new Viewer({
  container: document.querySelector('#viewer'),

  panorama: '/drafttaxistand.jpg',

  navbar: ['gyroscope'],

  mousemove: true,
  mousewheel: false,

  plugins: [GyroscopePlugin],

  defaultYaw: 0,
  defaultPitch: 0,
  defaultZoomLvl: 0,
});